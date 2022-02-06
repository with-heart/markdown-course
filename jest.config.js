const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

module.exports = createJestConfig({
  moduleDirectories: ['node_modules', '<rootDir>/'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironment: 'jest-environment-jsdom',
})
