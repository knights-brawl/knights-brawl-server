const LOGS = {
  DEFAULT: {
    ERROR: 'Fail!',
    SUCCESS: 'Success!',
  },
  ERROR: {
    AUTH: {
      UNAUTHORIZED: 'Unauthorized',
      LOGIN: 'Login failed!',
      SIGNUP: 'Sign up failed!',
      USER_SAVE: 'Failed to add user to DB!',
      JWT_EXPIRED: 'JWT token expired!',
    },
    DB: {
      CONNECTION: 'Failed DB connection',
    },
    HTTP: {
      DEFAULT: 'Request failed',
      INVALID_REQUEST: 'Invalid request',
    },
    PASSWORD: {
      COMPARING: 'Passwords do not match',
      HASHING: 'Hashing failed',
      INVALID: 'Invalid password',
    },
    USER: {
      NOT_FOUND: 'User not found',
      GET_ONE: 'Failed to get user',
      GET_MANY: 'Failed to get users',
      DELETE: 'Failed to delete users',
    },
  },
  SUCCESS: {
    AUTH: {
      LOGIN: 'Login completed successfully',
      SIGNUP: 'User signed up successfully',
    },
    DB: {
      CONNECTION: 'DB connection successfully established',
    },
    HTTP: {
      DEFAULT: 'Request completed successfully',
    },
    USER: {
      USER_UPDATE: 'User updated successfully',
      GET_ONE: 'User got successfully',
      GET_MANY: 'Users got successfully',
      DELETE: 'User deleted successfully',
    },
  },
};

export default LOGS;
