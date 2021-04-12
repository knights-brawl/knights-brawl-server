import { sign } from 'jsonwebtoken';

export default function createToken(userId: string): string {
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) {
    throw new Error('secret is not specified!');
  }

  return sign({ userId }, JWT_SECRET, { expiresIn: '2 days' });
}
