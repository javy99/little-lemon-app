module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
    },
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
};
