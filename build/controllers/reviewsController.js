"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateReviewRequestDTO = _interopRequireDefault(require("../dtos/CreateReviewRequestDTO"));

var _Review = _interopRequireDefault(require("../models/Review"));

var _reviewsService = _interopRequireDefault(require("../services/reviewsService"));

var _reviewsRepository = _interopRequireDefault(require("../repositories/reviewsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependency injection
const reviewsService = new _reviewsService.default(new _reviewsRepository.default(_Review.default));
const router = (0, _express.Router)(); // Get all reviews by googleId + my review by googleId

router.get('/:googleId', async (req, res, next) => {
  try {
    const {
      googleId
    } = req.params;
    const {
      id
    } = req.user;
    const allReviewsOfOneBook = await reviewsService.findReviewsByGoogleId(googleId);
    const myReviewOfOneBook = await reviewsService.findMyReviewByGoogleId(googleId, id);
    res.status(201).json([allReviewsOfOneBook, myReviewOfOneBook]);
  } catch (error) {
    next(error);
  }
}); // Add new review

router.post('/:googleId', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const {
      googleId
    } = req.params;
    const body = new _CreateReviewRequestDTO.default(req.body);
    const newReview = await reviewsService.create(body, id, googleId);
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
}); // Edit one review by review id

router.put('/:reviewId', async (req, res, next) => {
  try {
    const {
      reviewId
    } = req.params;
    const body = new _CreateReviewRequestDTO.default(req.body);
    const editedReview = await reviewsService.editReviewByReviewId(reviewId, body);
    res.status(201).json(editedReview);
  } catch (error) {
    next(error);
  }
}); // Delete one review by review id

router.delete('/:reviewId', async (req, res, next) => {
  try {
    const {
      reviewId
    } = req.params;
    await reviewsService.deleteOne(reviewId);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});
var _default = router;
exports.default = _default;