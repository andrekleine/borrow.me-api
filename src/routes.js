import { Router } from "express";

import authController from './controllers/authController';
import booksController from './controllers/booksController';
import reviewsController from './controllers/reviewsController';

const router = Router();

router.use('/auth', authController);
router.use('/books', booksController);
router.use('/reviews', reviewsController);

export default router;