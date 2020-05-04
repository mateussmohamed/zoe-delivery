/* eslint-disable */
module.exports = {
  preset: 'ts-jest',

  roots: ['<rootDir>'],

  testRegex: '(/src/__tests__/.*|(\\.|/)(test))\\.tsx?$',

  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/__tests__/__mocks__'],

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  moduleFileExtensions: ['ts', 'tsx', 'js'],

  moduleNameMapper: {
    'test-utils': '<rootDir>/utils/test-utils',
    '^~/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__tests__/__mocks__/fileMock.ts'
  },

  bail: 1,

  collectCoverage: true,

  collectCoverageFrom: ['src/**/*'],

  coverageDirectory: 'coverage',

  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20
    }
  }
}
