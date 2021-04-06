import { Request } from 'express';
import { UserDoc } from '@interfaces/entities';

export default interface ExtendedRequest extends Request {
  userId: UserDoc['_id'];
}
