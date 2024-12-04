const defaultConfig = require('./default');
const typescriptPlugin = require('typescript-eslint');

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
module.exports = [
  ...defaultConfig,
  ...typescriptPlugin.configs.strict,
  ...typescriptPlugin.configs.stylistic,
  {
    languageOptions: {
      parser: typescriptPlugin.parser,
      parserOptions: {
        projectService: true
      }
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error'],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-invalid-this': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/return-await': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error'
    }
  }
];
