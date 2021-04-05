import mongoose from 'mongoose';

import { LOGS } from '@constants';
import logger from '@utils/logger';

const MONGO_URL: string | undefined = process.env.MONGO_URL;

if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true);
}

export default async function connectDB(): Promise<typeof mongoose> {
  if (!MONGO_URL) {
    throw new Error('MONGO_URL is not found');
  }

  const connection = await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  logger.info(LOGS.SUCCESS.DB.CONNECTION);

  return connection;
}
