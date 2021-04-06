import Joi from '@hapi/joi';

import { authPatterns } from '@validation/patterns';

const authValidator = {
  signup: Joi.object({
    username: authPatterns.username,
    email: authPatterns.email,
    password: authPatterns.password,
  }),
  login: Joi.object({
    login: authPatterns.login,
    password: authPatterns.password,
  }),
};

export default authValidator;
