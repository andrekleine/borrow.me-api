import express from 'express';
import dotenv from 'dotenv';

// Calling environment variables
dotenv.config();

const app = express();

// Middlewares
app.use((req, res, next) => {
  console.log(`Receiving ${req.method} request to route ${req.path}`);
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello borrow.me API!',
  })
});

// Error handling middleware
// Route not found middleware


app.listen(process.env.PORT, () =>
  console.log(`App connected to PORT ${process.env.PORT}`)
);
