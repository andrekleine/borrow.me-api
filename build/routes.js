"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _authController = _interopRequireDefault(require("./controllers/authController"));

var _booksController = _interopRequireDefault(require("./controllers/booksController"));

var _reviewsController = _interopRequireDefault(require("./controllers/reviewsController"));

var _protectedRoute = _interopRequireDefault(require("./middlewares/protectedRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // Public routes

router.use('/auth', _authController.default); // Protected routes middleware

router.use(_protectedRoute.default); // Private routes

router.use('/books', _booksController.default);
router.use('/reviews', _reviewsController.default);
var _default = router;
exports.default = _default;