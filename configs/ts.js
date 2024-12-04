const defaultConfig = require('./default');
const typescriptPlugin = require('typescript-eslint');

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
module.exports = [
  ...defaultConfig,
  ...typescriptPlugin.configs.recommended,
  /*
   * ...typescriptPlugin.configs.strict,
   * ...typescriptPlugin.configs.stylistic,
   */
  {
    rules: {
      camelcase: 'off',
      'lines-between-class-members': 'off',
      'no-duplicate-imports': 'off',
      'no-invalid-this': 'off',
      'no-return-await': 'off',
      'no-unused-expressions': 'off',
      'no-use-before-define': 'off',
      'padding-line-between-statements': 'off',
      'require-unicode-regexp': 'off'
    }
  },
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
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {
          allowDefaultCaseForExhaustiveSwitch: true,
          considerDefaultExhaustiveForUnions: true
        }
      ]
    }
  }
];
