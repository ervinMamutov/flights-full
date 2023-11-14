import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import logger from './middleware/logger.js';
import userRouters from './routes/user.js';
import flightRouters from './routes/flight.js';

dotenv.config();
const PORT = process.env.PORT || 3005;

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
);

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(userRouters);
app.use(userRouters);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Page not found ' });
});

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URI);
    console.log('Connection to the database successfully');
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

connectToDB();
