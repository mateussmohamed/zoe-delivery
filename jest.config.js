/* eslint-disable */
const { pathsToModuleNameMapper } = require('ts-jest/utils')

const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest',

  roots: ['<rootDir>/src'],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  moduleFileExtensions: ['ts', 'tsx', 'js'],

  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    'test-utils': '<rootDir>/utils/test-utils',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },

  bail: 1,

  collectCoverage: true,

  collectCoverageFrom: ['src/**/*', '!src/styles/**', '!src/**/styles.ts', '!src/__tests__/**', '!src/@/types'],

  coverageDirectory: 'coverage',

  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: -10
    }
  }
}
