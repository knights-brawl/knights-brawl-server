import { scrypt } from 'crypto';

export default function getHashedPassword(password: string): Promise<string> {
  const { SALT } = process.env;

  if (!SALT) {
    throw new Error('SALT is not specified!');
  }

  return new Promise((resolve) => {
    scrypt(password, SALT, 64, (err, hash) => {
      if (err) {
        throw err;
      }
      resolve(hash.toString('hex'));
    });
  });
}
