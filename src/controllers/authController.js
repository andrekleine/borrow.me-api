import { Router } from 'express';

import RegisterRequestDTO from '../dtos/RegisterRequestDTO';
import LoginRequestDTO from '../dtos/LoginRequestDTO';

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
  try {
    const body = new LoginRequestDTO(req.body);

    const loginResponse = await authService.login(body);
    res.status(201).json(loginResponse);
  } catch (error) {
    next(error);
  }
});

// Get user by id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await authService.findUserById(id);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
