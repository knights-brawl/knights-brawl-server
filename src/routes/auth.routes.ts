import { Request, Response, Router } from 'express';

import { AuthController } from '@controllers';
import { validatorMiddleware } from '@middlewares';
import { logger } from '@utils';
import { authValidator } from '@validation/validators';

const authRouter = Router();

authRouter.post('/signup', validatorMiddleware(authValidator.signup, 'body'), (req: Request, res: Response) => {
  AuthController.postSignUp(req, res).catch((error) => logger.error(error));
});

authRouter.post('/login', validatorMiddleware(authValidator.login, 'body'), (req: Request, res: Response) => {
  AuthController.postLogin(req, res).catch((error) => logger.error(error));
});

export default authRouter;
