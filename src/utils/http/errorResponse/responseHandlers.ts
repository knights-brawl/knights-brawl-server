import { Response } from 'express';

import { LOGS, STATUSES } from '@constants';
import { logger } from '@utils';

import { BackServerResponse } from '@interfaces/http';

const defaultErrorResponse: BackServerResponse = {
  message: LOGS.ERROR.HTTP.DEFAULT,
  payload: { status: LOGS.SUCCESS.HTTP.DEFAULT },
  status: STATUSES.RESPONSE.ERROR.DEFAULT,
};

export default function errorResponse(
  res: Response,
  error: Error,
  { message, status }: BackServerResponse = defaultErrorResponse,
): Response {
  logger.info({ message, status });
  logger.error(error);

  return res.status(status).json({
    message,
    payload: { error },
    status,
  });
}
