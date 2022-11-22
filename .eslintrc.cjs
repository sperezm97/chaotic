module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard', 'prettier'],
    plugins: ['prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
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
