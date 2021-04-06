import { scrypt } from 'crypto';

const salt = process.env.SALT;

export default function getHashedPassword(password: string): Promise<string> {
  if (!salt) {
    throw new Error('salt is not specified!');
  }

  return new Promise((resolve) => {
    scrypt(password, salt, 64, (err, hash) => {
      if (err) {
        throw err;
      }
      resolve(hash.toString('hex'));
    });
  });
}
