import express from 'express';
import dotenv from 'dotenv';

import initMongoConnection from './database/mongoDBConfig';

import appRoutes from './routes';

import errorHandlingMiddleware from './middlewares/errorHandling';
import requestTrackingMiddleware from './middlewares/requestTracking';
import resourceNotFoundMiddleware from './middlewares/resourceNotFound';

dotenv.config();
const app = express();
initMongoConnection();

// Middlewares
app.use(express.json());

app.use(requestTrackingMiddleware);

app.use('/api', appRoutes);

app.use(errorHandlingMiddleware);
app.use(resourceNotFoundMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`App connected to PORT ${process.env.PORT}`);
});
