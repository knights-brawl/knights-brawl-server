import { Request, Response } from 'express';

import { LOGS, STATUSES } from '@constants';
import { http } from '@utils';
import { AuthService } from '@services';

import { UserLogInRequest, UserSignUpRequest } from '@interfaces/http';

const { errorResponse, successResponse } = http;

class AuthController {
  postSignUp = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, username, password } = req.body as UserSignUpRequest;

      const token = await AuthService.signUp({ email, username, password });

      return successResponse(res, {
        message: LOGS.SUCCESS.AUTH.SIGNUP,
        payload: { jwtToken: token },
        status: STATUSES.RESPONSE.SUCCESS.DEFAULT,
      });
    } catch (error) {
      const { message } = error as Error;

      return errorResponse(res, error, { message, status: STATUSES.RESPONSE.ERROR.UNAUTHORIZED });
    }
  };

  postLogin = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { login, password } = req.body as UserLogInRequest;

      const token = await AuthService.logIn({ login, password });

      return successResponse(res, {
        message: LOGS.SUCCESS.AUTH.LOGIN,
        payload: { jwtToken: token },
        status: STATUSES.RESPONSE.SUCCESS.DEFAULT,
      });
    } catch (error) {
      const { message } = error as Error;

      return errorResponse(res, error, { message, status: STATUSES.RESPONSE.ERROR.UNAUTHORIZED });
    }
  };
}

export default new AuthController();
