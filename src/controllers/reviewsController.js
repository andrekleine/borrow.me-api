import { Router } from 'express';

import CreateReviewRequestDTO from '../dtos/CreateReviewRequestDTO';

import Review from '../models/Review';

import ReviewsService from '../services/reviewsService';
import ReviewsRepository from '../repositories/reviewsRepository';

// Dependency injection
const reviewsService = new ReviewsService(new ReviewsRepository(Review));

const router = Router();

// Get all reviews by googleId + my review by googleId
router.get('/:googleId', async (req, res, next) => {
  try {
    const { googleId } = req.params;
    const { id } = req.user;

    // const allReviewsOfOneBook = await reviewsService.findReviewsByGoogleId(googleId);

    const myReviewOfOneBook = await reviewsService.findMyReviewByGoogleId(googleId, id);

    res.status(201).json(myReviewOfOneBook);
  } catch (error) {
    next(error);
  }
});

// Add new review
router.post('/:googleId', async (req, res, next) => {
  try {
    const { id } = req.user;
    const { googleId }= req.params;
    const body = new CreateReviewRequestDTO(req.body);

    const newReview = await reviewsService.create(body, id, googleId);

    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
});

// Edit one review by review id
router.put('/:reviewId', async (req, res, next) => {
  try {    
    const { reviewId } = req.params;
    const body = new CreateReviewRequestDTO(req.body);

    const editedReview = await reviewsService.editReviewByReviewId(reviewId, body);

    res.status(201).json(editedReview);
  } catch (error) {
    next(error);
  }
});

// Delete one review by review id
router.delete('/:reviewId', async (req, res, next) => {
  try {
    const { reviewId } = req.params;   

    await reviewsService.deleteOne(reviewId);

    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

export default router;
