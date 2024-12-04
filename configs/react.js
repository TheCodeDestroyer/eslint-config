const { fixupPluginRules } = require('@eslint/compat');
const globals = require('globals');

const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

const defaultConfig = require('./default.js');

module.exports = [
  ...defaultConfig,
  jsxA11yPlugin.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    },
    plugins: { 'react-hooks': fixupPluginRules(reactHooksPlugin) },
    rules: {
      // REACT HOOKS RULES
      ...reactHooksPlugin.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'error',

      // REACT RULES
      'react/button-has-type': 'error',
      'react/destructuring-assignment': 'error',
      'react/forbid-prop-types': [
        'error',
        {
          forbid: ['any', 'array', 'object']
        }
      ],
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' }
      ],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': [
        'error',
        { children: 'never', props: 'never' }
      ],
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] }
      ],
      'react/jsx-fragments': ['error', 'element'],

      'react/jsx-max-depth': ['error', { max: 7 }],
      'react/jsx-max-props-per-line': [
        'error',
        { maximum: 1, when: 'multiline' }
      ],
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true,
          allowBind: false,
          ignoreRefs: true
        }
      ],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      'react/jsx-pascal-case': 'error',
      'react/no-array-index-key': 'error',
      'react/no-danger': 'warn',
      'react/no-invalid-html-attribute': 'error',
      'react/no-multi-comp': 'error',
      'react/no-namespace': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-unused-prop-types': [
        'error',
        {
          skipShapeProps: true
        }
      ],
      'react/self-closing-comp': 'error',
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error'
    }
  }
];
