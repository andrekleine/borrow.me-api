import { Router } from 'express';

import bcrypt from 'bcryptjs';

import User from '../models/User';
import registerSchema from '../schemas/registerSchema';
import InvalidBodyRequest from '../errors/InvalidBodyRequest';
import UserAlreadyExists from '../errors/UserAlreadyExists';

const router = Router();

// Register
router.post('/register', async (req, res, next) => {
  try {
    try {
      await registerSchema.validate(req.body, { abortEarly: false });
    } catch (error) {
      const errors = error.inner.map((err) => ({
        field: err.path,
        error: err.errors[0],
      }));

      throw new InvalidBodyRequest(errors);
    }

    const foundUser = await User.findOne({ email: req.body.email });

    if (foundUser) {
      throw new UserAlreadyExists();
    }

    const encryptedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    const newUser = { ...req.body, password: encryptedPassword };

    const savedUser = await User.create(newUser);

    const response = {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
    };

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
});

// Log in
router.post('/login', (req, res, next) => {
  try {
    console.log(req.body);
    res.status(201).json(req.body);
  } catch (error) {}
});

export default router;
