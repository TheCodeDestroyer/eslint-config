/* eslint sort-keys: "error" */
module.exports = {
  extends: ['tcd/configs/esnext', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    camelcase: 'off',
    'lines-between-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-invalid-this': 'off',
    'no-return-await': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'padding-line-between-statements': 'off',
    'require-unicode-regexp': 'off',

    // TYPESCRIPT RULES

    // eslint-disable-next-line sort-keys
    '@typescript-eslint/consistent-type-imports': ['error'],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/lines-between-class-members': ['error', 'always'],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'var']
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        next: 'return',
        prev: '*'
      }
    ],
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error'
  }
};
