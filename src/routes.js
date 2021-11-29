import { Router } from 'express';

import authController from './controllers/authController';
import booksController from './controllers/booksController';
import reviewsController from './controllers/reviewsController';

import protectedRoute from './middlewares/protectedRoute';

const router = Router();

// Public routes
router.use('/auth', authController);

// Protected routes middleware
router.use(protectedRoute);

// Private routes
router.use('/books', booksController);
router.use('/reviews', reviewsController);

export default router;
