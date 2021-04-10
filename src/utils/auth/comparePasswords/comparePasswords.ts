import { getHashedPassword } from '..';
import { logger } from '@utils';

export default async function comparePasswords(input: string, hash: string): Promise<boolean> {
  try {
    return (await getHashedPassword(input)) === hash;
  } catch (error) {
    logger.error(error);
    return false;
  }
}
