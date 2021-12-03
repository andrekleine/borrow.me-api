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
    const bookAmount = 9;

    // Last 9 books ready by friends    
    const last9BooksReadByFriends =
      await booksService.findLastBooksReadByFriends(id, bookAmount);

    // Last 9 books friends will lend
    const last9BooksFriendsWillLend =
      await booksService.findLastBooksFriendsWillLend(id, bookAmount);

    // Last 9 books I have read
    const last9BooksIRead = await booksService.findLastBooksIRead(id, bookAmount);

    // Response
    res
      .status(201)
      .json([
        last9BooksReadByFriends,
        last9BooksFriendsWillLend,
        last9BooksIRead,
      ]);
  } catch (error) {
    next(error);
  }
});

// "New From Friends" section
router.get('/new-books-friends', async (req, res, next) => {
  try {
    const { id } = req.user;
    const bookAmount = 60;

    // Last 60 books read by friends
    const last60BooksReadByFriends =
      await booksService.findLastBooksReadByFriends(id, bookAmount);

    // Response
    res.status(201).json(last60BooksReadByFriends);
  } catch (error) {
    next(error);
  }
});

// "Friends will lend" section
router.get('/friends-will-lend', async (req, res, next) => {
  try {
    const { id } = req.user;
    const bookAmount = 60;

    // Last 60 books read by friends
    const last60BooksFriendsWillLend =
      await booksService.findLastBooksFriendsWillLend(id, bookAmount);

    // Response
    res.status(201).json(last60BooksFriendsWillLend);
  } catch (error) {
    next(error);
  }
});

// "I read recently" section
router.get('/read-recently', async (req, res, next) => {
  try {
    const { id } = req.user;
    const bookAmount = 60;

    // Last 60 books read by friends
    const last60BooksIRead = await booksService.findLastBooksIRead(id, bookAmount);

    // Response
    res.status(201).json(last60BooksIRead);
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
