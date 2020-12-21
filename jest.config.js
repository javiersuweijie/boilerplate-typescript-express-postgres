module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageReporters: ["text-summary", "lcov"],
    setupFilesAfterEnv: [
        "./jest.setup.js"
    ],
    roots: ['./test'],
    coveragePathIgnorePatterns: [],
    testMatch: ['**/*.[jt]s?(x)']
};
