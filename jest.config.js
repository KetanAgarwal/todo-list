module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ["lcov", "text", "html"]
};
