import { BasicPayload } from '../payloads';

export default interface BackServerResponse<T = BasicPayload> {
  status: number;
  message: string;
  payload?: T | null;
}
