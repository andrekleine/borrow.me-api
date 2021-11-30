import { Router } from 'express';

import CreateBookRequestDTO from '../dtos/CreateBookRequestDTO';

import Book from '../models/Book';

import BooksService from '../services/booksService';
import BooksRepository from '../repositories/booksRepository';

// Dependency injection
const booksService = new BooksService(new BooksRepository(Book));

const router = Router();

// Home
router.get('/', async (req, res, next) => {
  try {
    const { id } = req.user;

    // Last 15 books ready by friends
    const lastBooksReadByFriends =
      await booksService.findLastBooksReadByFriends(id);

    // Last 15 books friends will lend
    const lastBooksFriendsWillLend =
      await booksService.findLastBooksFriendsWillLend(id);

    // Last 9 books I have read
    const lastBooksIRead = await booksService.findLastBooksIRead(id);

    // Response
    res
      .status(201)
      .json([lastBooksReadByFriends, lastBooksFriendsWillLend, lastBooksIRead]);
  } catch (error) {
    next(error);
  }
});

// Find one book
router.get('/:bookId', async (req, res, next) => {
  try {
    const { bookId } = req.params;
    console.log(req.params);

    const book = await booksService.findOneBookByBookId(bookId);

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
});

// Add new book
router.post('/:googleId', async (req, res, next) => {
  try {
    const { id } = req.user;
    const body = new CreateBookRequestDTO(req.body);

    const newBook = await booksService.create(body, id);

    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
});

// Delete one book by id
router.delete('/:bookId', async (req, res, next) => {
  try {
    const { id } = req.user;
    const { bookId } = req.params;

    await booksService.deleteOne(bookId, id);

    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

export default router;
