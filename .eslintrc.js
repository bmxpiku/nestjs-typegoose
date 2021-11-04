module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint/eslint-plugin'],
    parserOptions: {
        source: 'module',
        ecmaVersion: 2018,
    },
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    ignorePatterns: ['*.d.ts', 'dist/*', '**/node_modules/*', '*.js'],
    globals: {
        WeakSet: 'readonly',
        Promise: 'readonly',
        Reflect: 'readonly',
        Symbol: 'readonly',
    },
};
