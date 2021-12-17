/* eslint sort-keys: "error" */
module.exports = {
  extends: ['tcd', 'eslint-config-tcd/configs/jsx-a11y'],
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: ['react', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json'
        ]
      }
    },
    'react': {
      pragma: 'React',
      version: 'detect'
    }
  },
  /*
   * View link below for react rules documentation
   * https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
   */
  // eslint-disable-next-line sort-keys
  rules: {
    // REACT JSX A11Y RULES
    'jsx-quotes': ['error', 'prefer-double'],

    // REACT HOOKS RULES
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    // REACT RULES
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': ['off', { allowRequiredDefaults: false }],
    'react/destructuring-assignment': 'error',
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/forbid-component-props': ['off', { forbid: [] }],
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': ['off', { forbid: [] }],
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': [
      'error',
      {
        forbid: [
          'any',
          'array',
          'object'
        ]
      }
    ],
    'react/function-component-definition': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'always' }],
    'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-curly-spacing': [
      'error',
      'never',
      { allowMultiline: true }
    ],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'off',
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true
      }
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-prop-types': 'off',
    'react/jsx-sort-props': [
      'off',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false
      }
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeSelfClosing: 'allow',
        closingSlash: 'never'
      }
    ],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',

    'react/jsx-wrap-multilines': [
      'error',
      {
        arrow: true,
        assignment: true,
        declaration: true,
        return: true
      }
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'off',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-redundant-should-component-update': 'off',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true
      }
    ],
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/prop-types': [
      'error',
      {
        customValidators: [],
        ignore: [],
        skipUndeclared: false
      }
    ],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-optimization': ['off', { allowDecorators: [] }],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    'react/sort-prop-types': [
      'off',
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false
      }
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  }
};
