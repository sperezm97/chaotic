module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true
    },
    extends: ['standard', 'prettier'],
    plugins: ['prettier', 'jest'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                trailingComma: 'none'
            }
        ]
    }
};
