"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ReviewsService {
  constructor(reviewsRepository) {
    this.reviewsRepository = reviewsRepository;
  } // Find all reviews by googleId


  async findReviewsByGoogleId(googleId) {
    const allReviewsOfOneBook = await this.reviewsRepository.findReviewsByGoogleId(googleId);
    return allReviewsOfOneBook;
  } // Find my review by googleId


  async findMyReviewByGoogleId(googleId, id) {
    const myReviewOfOneBook = await this.reviewsRepository.findMyReviewByGoogleId(googleId, id);
    return myReviewOfOneBook;
  } // Create new review in DB


  async create(body, id, googleId) {
    await body.validate();
    const reviewData = {
      stars: body.stars,
      text: body.text,
      googleID: googleId,
      owner: id
    };
    const newReview = await this.reviewsRepository.create(reviewData);
    return newReview;
  } // Edit existing review in DB


  async editReviewByReviewId(reviewId, body) {
    await body.validate();
    const reviewData = {
      stars: body.stars,
      text: body.text
    };
    const editedReview = await this.reviewsRepository.editReviewByReviewId(reviewId, reviewData);
    return editedReview;
  } // Delete one review by id


  async deleteOne(reviewId) {
    await this.reviewsRepository.deleteOneById(reviewId);
  }

}

var _default = ReviewsService;
exports.default = _default;