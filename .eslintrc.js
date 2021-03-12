module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'plugin:jest/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12, // es2021, see 'env' above
        sourceType: 'module'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
                typescript: {} // this loads <rootdir>/tsconfig.json to eslint
            }
        }
    },
    plugins: [
        '@typescript-eslint',
        'jest'
    ],
    rules: {
        'import/prefer-default-export': 'off',
        'comma-dangle': ['error', 'never'],
        'import/no-unresolved': 'error',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/extensions': ['error', 'always', { js: 'never', ts: 'never' }],
        indent: ['error', 4]
    }
};
