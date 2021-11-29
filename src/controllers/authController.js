import { Router } from 'express';

import RegisterRequestDTO from '../dtos/RegisterRequestDTO';

import User from '../models/User';

import AuthService from '../services/authService';
import AuthRepository from '../repositories/authRepository';

// Dependency injection
const authService = new AuthService(new AuthRepository(User));

const router = Router();

// Register
router.post('/register', async (req, res, next) => {
  try {
    const body = new RegisterRequestDTO(req.body);

    const userResponse = await authService.register(body);

    res.status(201).json(userResponse);
  } catch (error) {
    next(error);
  }
});

// Log in
router.post('/login', async (req, res, next) => {
  const { body } = req;
  try {
    

    res.status(201).json(body);
  } catch (error) {
    next(error);
  }
});

export default router;
