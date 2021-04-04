import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';

import { connectDB } from './utils/db';
import logger from './utils/logger';

import { LOGS } from './constants';

// Merge .env to process.env
dotenv.config();

// Get Express app
const app: Application = express();

// Connect to DB or throw an error if connection not established
connectDB()
  .then((dbConnection) => {
    if (!dbConnection) {
      throw new Error(LOGS.ERROR.DB.CONNECTION);
    }
  })
  .catch((err: Error) => logger.error(err.message));

// Enable CORS
app.use(cors());

// Enable body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start server
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log('Listening on port %s', PORT);
});

// Enable graceful stop
process.once('SIGINT', () => {
  server.close();
});
process.once('SIGTERM', () => {
  server.close();
});
