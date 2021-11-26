import express from 'express';
import dotenv from 'dotenv';

// Calling environment variables
dotenv.config();

const app = express();

app.get('/', (req, res) =>
  res.json({
    message: 'Hello borrow.me API!',
  })
);

app.listen(process.env.PORT, () =>
  console.log(`App connected to PORT ${process.env.PORT}`)
);
