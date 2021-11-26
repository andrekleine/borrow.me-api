import express from 'express';
import dotenv from 'dotenv';

import initMongoConnection from './database/mongoDBConfig';

import errorHandlingMiddleware from './middlewares/errorHandling';
import requestTrackMiddleware from './middlewares/requestTracking';
import resourceNotFoundMiddleware from './middlewares/resourceNotFound';

import User from './models/User';

dotenv.config();
const app = express();
initMongoConnection();

// Middlewares
app.use(requestTrackMiddleware);


app.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandlingMiddleware);
app.use(resourceNotFoundMiddleware);

app.listen(process.env.PORT, () =>
  console.log(`App connected to PORT ${process.env.PORT}`)
);
