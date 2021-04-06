import Joi from '@hapi/joi';

import { userPatterns } from '@validation/patterns';

const userValidator = {
  getById: Joi.object({
    id: userPatterns.id,
  }),
  deleteById: Joi.object({
    id: userPatterns.id,
  }),
};

export default userValidator;
