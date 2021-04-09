/* eslint-disable @typescript-eslint/unbound-method */

import { Response } from 'express';
import errorResponse from './errorResponse';

import { LOGS, STATUSES } from '@constants';

import { BackServerResponse } from '@interfaces/http';

jest.mock('@utils', () => ({
  __esModule: true,
  logger: {
    info: jest.fn(),
    error: jest.fn(),
  },
}));

const mockResponse = (): {
  status: jest.Mock;
  json: jest.Mock;
} => {
  const res = {
    status: jest.fn(),
    json: jest.fn(),
  };

  res.status.mockReturnValue(res);
  res.json.mockReturnValue(res);

  return res;
};

describe('errorResponse', () => {
  it('returns default response with Error', () => {
    const error = new Error('foo');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = errorResponse((mockResponse() as any) as Response, error);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(STATUSES.RESPONSE.ERROR.DEFAULT);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      message: LOGS.ERROR.HTTP.DEFAULT,
      payload: { error },
      status: STATUSES.RESPONSE.ERROR.DEFAULT,
    });
  });

  it('returns with provided response', () => {
    const error = new Error('qux');
    const body = {
      message: 'foo',
      status: 'bar',
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = errorResponse((mockResponse() as any) as Response, error, (body as any) as BackServerResponse);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(body.status);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      message: body.message,
      payload: { error },
      status: body.status,
    });
  });
});
