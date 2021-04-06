import Joi from '@hapi/joi';

const userPatterns = {
  id: Joi.string().required(),
};

export default userPatterns;
