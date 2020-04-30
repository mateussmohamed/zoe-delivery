/* eslint-disable */
const { pathsToModuleNameMapper } = require('ts-jest/utils')

const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest',

  roots: ['<rootDir>/src'],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  moduleFileExtensions: ['ts', 'tsx', 'js'],

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),

  bail: 1,

  collectCoverage: true,

  collectCoverageFrom: ['src/**/*', '!src/styles/**', '!src/__tests__/**', '!**/*.d.ts'],

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
