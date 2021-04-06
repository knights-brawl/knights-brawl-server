import { Response } from 'express';

import { LOGS, STATUSES } from '@constants';
import { UserService } from '@services';
import { http } from '@utils';

import { UserDoc } from '@interfaces/entities';
import { ExtendedRequest } from '@interfaces/http';

const { errorResponse, successResponse } = http;

class UserController {
  getCurrentUser = async (req: ExtendedRequest, res: Response): Promise<void> => {
    try {
      const user: UserDoc = await UserService.getById(req.userId);

      successResponse(res, {
        message: LOGS.SUCCESS.AUTH.LOGIN,
        payload: user,
        status: STATUSES.RESPONSE.SUCCESS.DEFAULT,
      });
    } catch (error) {
      errorResponse(res, error);
    }
  };

  getById = async (req: ExtendedRequest, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const user: UserDoc = await UserService.getById(id);

      successResponse(res, {
        message: LOGS.SUCCESS.USER.GET_ONE,
        payload: user,
        status: STATUSES.RESPONSE.SUCCESS.DEFAULT,
      });
    } catch (error) {
      errorResponse(res, error);
    }
  };

  getAll = async (req: ExtendedRequest, res: Response): Promise<void> => {
    try {
      const users: UserDoc[] = await UserService.getAll();

      successResponse(res, {
        message: LOGS.SUCCESS.USER.GET_MANY,
        payload: users,
        status: STATUSES.RESPONSE.SUCCESS.DEFAULT,
      });
    } catch (error) {
      errorResponse(res, error);
    }
  };

  deleteById = async (req: ExtendedRequest, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const user: UserDoc = await UserService.getById(id);

      successResponse(res, {
        message: LOGS.SUCCESS.USER.DELETE,
        payload: user,
        status: STATUSES.RESPONSE.SUCCESS.DEFAULT,
      });
    } catch (error) {
      errorResponse(res, error);
    }
  };
}

export default new UserController();
