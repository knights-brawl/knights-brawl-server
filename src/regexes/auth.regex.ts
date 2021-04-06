import { LIMITS } from '@constants';

const AUTH_REGEX = {
  PASSWORD: new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{${LIMITS.MIN_LENGTH.PASSWORD},}$`,
  ),
};

export default AUTH_REGEX;
