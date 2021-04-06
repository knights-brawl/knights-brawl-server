import { Router } from 'express';

import { default as authRouter } from './auth.routes';
import { default as userRouter } from './user.routes';
import { authMiddleware } from '@middlewares';

const appRouter = Router();

appRouter.use('/api/auth', authRouter);

appRouter.use(authMiddleware);

appRouter.use('/api/user', userRouter);

export default appRouter;
