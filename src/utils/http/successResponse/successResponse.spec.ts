/* eslint-disable @typescript-eslint/unbound-method */

import { Response } from 'express';
import successResponse from './successResponse';

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

describe('successResponse', () => {
  it('returns default success response', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = successResponse((mockResponse() as any) as Response);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(STATUSES.RESPONSE.SUCCESS.DEFAULT);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      message: LOGS.SUCCESS.HTTP.DEFAULT,
      payload: { status: LOGS.SUCCESS.HTTP.DEFAULT },
      status: STATUSES.RESPONSE.SUCCESS.DEFAULT,
    });
  });

  it('returns with provided body', () => {
    const body: BackServerResponse = {
      message: 'foo',
      payload: { status: 'bar' },
      status: 200,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = successResponse((mockResponse() as any) as Response, body);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(body.status);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(body);
  });

  it('returns with empty payload in body', () => {
    const body: BackServerResponse = {
      message: 'foo',
      payload: null,
      status: 200,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = successResponse((mockResponse() as any) as Response, body);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(body.status);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ ...body, payload: {} });
  });
});
