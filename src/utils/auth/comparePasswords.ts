import { hashPassword } from '.';
import logger from '@utils/logger';

export default async function comparePasswords(input: string, hash: string): Promise<boolean> {
  try {
    return (await hashPassword(input)) === hash;
  } catch (error) {
    logger.error(error);
    return false;
  }
}
