const LOGS = {
  SUCCESS: {
    DEFAULT: 'Success!',
    HTTP: {
      DEFAULT: 'Request completed successfully',
    },
    DB: {
      CONNECTION: 'DB connection successfully established',
    },
  },
  ERROR: {
    DEFAULT: 'Fail!',
    HTTP: {
      DEFAULT: 'Request failed',
      INVALID_REQUEST: 'Invalid request',
    },
    DB: {
      CONNECTION: 'Failed DB connection',
    },
  },
};

export default LOGS;
