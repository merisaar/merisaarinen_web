const path = require('path');

module.exports = {
    roots: [path.resolve(__dirname, './src')],
    displayName: 'tests',
    transform: {
        '^.+\\.(css|less)$': './src/Tests/Utilities/styleMock.js',
        '^.+\\.(jpg|gif|png)$': './src/Tests/Utilities/styleMock.js',
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**//__tests__/**/*.js', '**/?(*.)+(spec|test).[jt]s?(x)'],
    setupFilesAfterEnv: [path.resolve(__dirname, './src/Tests/Utilities/setupTests.ts')],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'jpg', 'gif'],
    testEnvironment: 'jsdom',
};
