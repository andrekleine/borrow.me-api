"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateBookRequestDTO = _interopRequireDefault(require("../dtos/CreateBookRequestDTO"));

var _Book = _interopRequireDefault(require("../models/Book"));

var _booksService = _interopRequireDefault(require("../services/booksService"));

var _booksRepository = _interopRequireDefault(require("../repositories/booksRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependency injection
const booksService = new _booksService.default(new _booksRepository.default(_Book.default));
const router = (0, _express.Router)(); // Home

router.get('/', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const bookAmount = 9; // Last 9 books ready by friends    

    const last9BooksReadByFriends = await booksService.findLastBooksReadByFriends(id, bookAmount); // Last 9 books friends will lend

    const last9BooksFriendsWillLend = await booksService.findLastBooksFriendsWillLend(id, bookAmount); // Last 9 books I have read

    const last9BooksIRead = await booksService.findLastBooksIRead(id, bookAmount); // Response

    res.status(201).json([last9BooksReadByFriends, last9BooksFriendsWillLend, last9BooksIRead]);
  } catch (error) {
    next(error);
  }
}); // "New From Friends" section

router.get('/new-books-friends', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const bookAmount = 60; // Last 60 books read by friends

    const last60BooksReadByFriends = await booksService.findLastBooksReadByFriends(id, bookAmount); // Response

    res.status(201).json(last60BooksReadByFriends);
  } catch (error) {
    next(error);
  }
}); // "Friends will lend" section

router.get('/friends-will-lend', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const bookAmount = 60; // Last 60 books read by friends

    const last60BooksFriendsWillLend = await booksService.findLastBooksFriendsWillLend(id, bookAmount); // Response

    res.status(201).json(last60BooksFriendsWillLend);
  } catch (error) {
    next(error);
  }
}); // "I read recently" section

router.get('/read-recently', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const bookAmount = 60; // Last 60 books read by friends

    const last60BooksIRead = await booksService.findLastBooksIRead(id, bookAmount); // Response

    res.status(201).json(last60BooksIRead);
  } catch (error) {
    next(error);
  }
}); // Find one book by MongoDB Id

router.get('/:googleId', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const {
      googleId
    } = req.params;
    console.log(req.params);
    const book = await booksService.findOneBookByGoogleId(googleId, id);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
}); // Add new book

router.post('/:googleId', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const body = new _CreateBookRequestDTO.default(req.body);
    const newBook = await booksService.create(body, id);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
}); // Delete one book by id

router.delete('/:bookId', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const {
      bookId
    } = req.params;
    await booksService.deleteOne(bookId, id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});
var _default = router;
exports.default = _default;