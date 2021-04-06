import { Response, Request, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import { LOGS, STATUSES } from '@constants';
import { UserService } from '@services';
import { http } from '@utils';

import { ExtendedRequest } from '@interfaces/http';

const { errorResponse } = http;

const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!jwtSecret) {
      throw new Error('jwt secret is not specified!');
    }

    const jwtToken = req.header('authorization');
    if (!jwtToken) {
      throw new Error(LOGS.ERROR.AUTH.UNAUTHORIZED);
    }

    try {
      const { userId } = jwt.verify(jwtToken, jwtSecret) as {
        userId: string;
      };

      const foundUser = await UserService.getById(userId);
      if (foundUser) {
        (req as ExtendedRequest).userId = userId;
      } else {
        throw new Error(LOGS.ERROR.USER.NOT_FOUND);
      }
    } catch {
      throw new Error(LOGS.ERROR.AUTH.JWT_EXPIRED);
    }
  } catch (error) {
    return errorResponse(res, error, {
      message: LOGS.ERROR.AUTH.UNAUTHORIZED,
      payload: null,
      status: STATUSES.RESPONSE.ERROR.UNAUTHORIZED,
    });
  }

  next();
};

export default authMiddleware;
