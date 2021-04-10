// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  cacheDirectory: '<rootDir>/.jestcache',

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['/node_modules/'],

  coverageReporters: [
    // 'json',
    ['text', { skipFull: true }],
    'text-summary',
    'lcov',
    // 'clover',
  ],

  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },

  errorOnDeprecated: true,

  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.json',
    },
  },

  moduleDirectories: ['<rootDir>', 'node_modules', 'src'],

  moduleNameMapper: {
    '^@constants$': ['<rootDir>/src/constants'],
    '^@controllers$': ['<rootDir>/src/controllers'],
    '^@interfaces$': ['<rootDir>/src/interfaces'],
    '^@middlewares$': ['<rootDir>/src/middlewares'],
    '^@models$': ['<rootDir>/src/models'],
    '^@regexes$': ['<rootDir>/src/regexes'],
    '^@routes$': ['<rootDir>/src/routes'],
    '^@services$': ['<rootDir>/src/services'],
    '^@utils$': ['<rootDir>/src/utils'],
    '^@validation$': ['<rootDir>/src/validation'],
  },

  modulePaths: ['<rootDir>'],

  preset: 'ts-jest',

  resetMocks: true,

  roots: ['<rootDir>'],

  setupFiles: ['<rootDir>/__tests__/setupTestEnvironment.ts'],

  testMatch: ['**/*.spec.ts?(x)', '**/*.test.ts?(x)'],
};
