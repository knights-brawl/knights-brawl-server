import { Router } from 'express';

import { default as authRouter } from './auth.routes';
import { authMiddleware } from '@middlewares';

const appRouter = Router();

appRouter.use('/api/auth', authRouter);

appRouter.use(authMiddleware);

export default appRouter;
