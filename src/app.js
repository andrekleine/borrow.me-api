import express from 'express';
import dotenv from 'dotenv';


import errorHandlingMiddleware from './middlewares/errorHandling';
import requestTrackMiddleware from './middlewares/requestTracking';
import resourceNotFoundMiddleware from './middlewares/resourceNotFound';

dotenv.config();
const app = express();

// Middlewares
app.use(requestTrackMiddleware);


app.get('/', (req, res, next) => {
  try {
    res.json({
      message: 'Hello borrow.me API!',
    });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandlingMiddleware);
app.use(resourceNotFoundMiddleware);

app.listen(process.env.PORT, () =>
  console.log(`App connected to PORT ${process.env.PORT}`)
);
