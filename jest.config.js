module.exports = {
    moduleNameMapper: {
        '\\.(svg|jpg|jpeg|png|gif|webp|ico)$': '<rootDir>/__mocks__/fileMock.js',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

};
