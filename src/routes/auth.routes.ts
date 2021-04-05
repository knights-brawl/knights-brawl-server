import { Request, Response, Router } from 'express';

import { AuthController } from '@controllers';
import { validatorMiddleware } from '@middlewares';
import { authValidator } from '@validation/validators';

const authRouter = Router();

authRouter.post('/signup', validatorMiddleware(authValidator.signup, 'body'), (req: Request, res: Response) =>
  AuthController.postSignUp(req, res),
);

authRouter.post('/login', validatorMiddleware(authValidator.login, 'body'), (req: Request, res: Response) =>
  AuthController.postLogin(req, res),
);

export default authRouter;
