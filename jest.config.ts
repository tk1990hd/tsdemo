import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Where your unit tests live:
  testMatch: ['**/tests/unit/**/*.spec.ts'],
  // Useful defaults
  clearMocks: true,
  collectCoverage: false, // set true later if you want coverage
  // coverageDirectory: 'coverage',
  // coverageProvider: 'v8',
};
export default config;
