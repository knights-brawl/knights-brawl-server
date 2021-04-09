import { Response } from 'express';

import { LOGS, STATUSES } from '@constants';
import { logger } from '@utils';

import { BackServerResponse } from '@interfaces/http';

const defaultSuccessResponse: BackServerResponse = {
  message: LOGS.SUCCESS.HTTP.DEFAULT,
  payload: { status: LOGS.SUCCESS.HTTP.DEFAULT },
  status: STATUSES.RESPONSE.SUCCESS.DEFAULT,
};

const defaultErrorResponse: BackServerResponse = {
  message: LOGS.ERROR.HTTP.DEFAULT,
  payload: { status: LOGS.SUCCESS.HTTP.DEFAULT },
  status: STATUSES.RESPONSE.ERROR.DEFAULT,
};

export function successResponse(
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

export function errorResponse(
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
