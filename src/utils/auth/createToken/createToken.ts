import { sign } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export default function createToken(userId: string): string {
  if (!secret) {
    throw new Error('secret is not specified!');
  }

  return sign({ userId }, secret, { expiresIn: '2 days' });
}
