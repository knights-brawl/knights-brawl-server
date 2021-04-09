import { Response } from 'express';

import { LOGS, STATUSES } from '@constants';
import { logger } from '@utils';

import { BackServerResponse } from '@interfaces/http';

const defaultSuccessResponse: BackServerResponse = {
  message: LOGS.SUCCESS.HTTP.DEFAULT,
  payload: { status: LOGS.SUCCESS.HTTP.DEFAULT },
  status: STATUSES.RESPONSE.SUCCESS.DEFAULT,
};

export default function successResponse(
  res: Response,
  { message, payload, status }: BackServerResponse = defaultSuccessResponse,
): Response {
  logger.info({ message, payload, status });

  return res.status(status).json({
    message,
    payload: payload || {},
    status,
  });
}
