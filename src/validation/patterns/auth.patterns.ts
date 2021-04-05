import Joi from '@hapi/joi';

import { LIMITS } from '@constants';
import { AUTH_REGEX } from '@regexes';

const usernamePattern = Joi.string().min(LIMITS.MIN_LENGTH.DEFAULT).max(LIMITS.MAX_LENGTH.DEFAULT).required();
const emailPattern = Joi.string().email().min(LIMITS.MIN_LENGTH.DEFAULT).max(LIMITS.MAX_LENGTH.DEFAULT).required();
const loginPattern = Joi.alternatives([usernamePattern, emailPattern]);
const passwordPattern = Joi.string()
  .min(LIMITS.MIN_LENGTH.PASSWORD)
  .max(LIMITS.MAX_LENGTH.PASSWORD)
  .pattern(AUTH_REGEX.PASSWORD)
  .required();

const authPatterns = {
  username: usernamePattern,
  email: emailPattern,
  login: loginPattern,
  password: passwordPattern,
};

export default authPatterns;
