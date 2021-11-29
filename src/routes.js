import { Router } from 'express';

import authController from './controllers/authController';
import booksController from './controllers/booksController';
import reviewsController from './controllers/reviewsController';

const router = Router();

// Public routes
router.use('/auth', authController);

// Protected routes middleware
router.use((req, res, next) => {
  try {
    if (!token) {
      throw new Error();
    }

    if (!tokenIsValid) {
      throw new Error();
    }

    // Insert user info inside request

    next();
  } catch (error) {
    next(error);
  }
});

// Private routes
router.use('/books', booksController);
router.use('/reviews', reviewsController);

export default router;
