import { Request, Response, Router } from 'express';

import { UserController } from '@controllers';
import { validatorMiddleware } from '@middlewares';
import { logger } from '@utils';
import { userValidator } from '@validation/validators';

import { ExtendedRequest } from '@interfaces/http';

const userRouter = Router();

userRouter.get('/all', (req: Request, res: Response) => {
  UserController.getAll(req as ExtendedRequest, res).catch((error) => logger.error(error));
});

userRouter.get('/me', (req: Request, res: Response) => {
  UserController.getCurrentUser(req as ExtendedRequest, res).catch((error) => logger.error(error));
});

userRouter.get('/:id', validatorMiddleware(userValidator.getById, 'params'), (req: Request, res: Response) => {
  UserController.getById(req as ExtendedRequest, res).catch((error) => logger.error(error));
});

userRouter.delete('/:id', validatorMiddleware(userValidator.deleteById, 'params'), (req: Request, res: Response) => {
  UserController.deleteById(req as ExtendedRequest, res).catch((error) => logger.error(error));
});

export default userRouter;
