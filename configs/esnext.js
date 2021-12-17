/* eslint sort-keys: "error" */
module.exports = {
  env: { 'es6': true },
  extends: 'tcd/configs/defaults',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  rules: {
    'no-invalid-this': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error'
  }
};
