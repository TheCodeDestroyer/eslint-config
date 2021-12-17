/* eslint sort-keys: "error" */
module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'off',
    'array-callback-return': 'error',
    'array-element-newline': ['error', 'consistent'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { after: true, before: true }],
    'block-scoped-var': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true }
    ],
    'camelcase': ['error'],
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        exports: 'never',
        functions: 'never',
        imports: 'never',
        objects: 'never'
      }
    ],
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'comma-style': ['error', 'last'],
    'complexity': 'off',
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'off',
    'consistent-this': [
      'error',
      'that',
      'self'
    ],
    'constructor-super': 'error',
    'curly': ['error', 'multi-line'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'always',
      { 'null': 'ignore' }
    ],
    'for-direction': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': ['error', 'multiline'],
    'generator-star-spacing': ['error', { after: true, before: true }],
    'getter-return': 'error',
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'off',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'init-declarations': 'off',
    'jsx-quotes': 'off',
    'key-spacing': ['error', { 'afterColon': true, 'beforeColon': false }],
    'keyword-spacing': ['error', { 'after': true, 'before': true }],
    'line-comment-position': ['off', { 'position': 'above' }],
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': ['error', 'always'],
    'max-classes-per-file': ['error', 1],
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      170,
      4,
      {
        ignoreComments: true,
        ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
        ignoreUrls: true
      }
    ],
    'max-lines': 'off',
    'max-lines-per-function': [
      'warn',
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'max-statements': ['warn', 20, { ignoreTopLevelFunctions: true }],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': 'off',
    'new-cap': ['error', { capIsNew: false, newIsCap: true }],
    'new-parens': 'error',
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': ['error', { 'checkLoops': false }],
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'off',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'off',
    'no-extra-parens': ['error', 'functions'],
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'off',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
        groups: [
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<='
          ],
          ['&&', '||'],
          ['in', 'instanceof']
        ]
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true
      }
    ],
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        variables: false
      }
    ],
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'off',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': [
      'error', { 'consistent': true }
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': true }],
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'always'],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': [
      'error',
      'after',
      { 'overrides': { ':': 'before', '?': 'before' } }
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: [
          'const',
          'let',
          'var'
        ]
      },
      {
        blankLine: 'any',
        next: [
          'const',
          'let',
          'var'
        ],
        prev: [
          'const',
          'let',
          'var'
        ]
      },
      {
        blankLine: 'always',
        next: 'return',
        prev: '*'
      }
    ],
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'quote-props': ['error', 'as-needed'],
    'quotes': [
      'error',
      'single',
      { 'allowTemplateLiterals': true, 'avoidEscape': true }
    ],
    'radix': ['error', 'as-needed'],
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { 'nonwords': false, 'words': true }],
    'spaced-comment': [
      'error',
      'always',
      {
        'block': {
          'balanced': true,
          'exceptions': ['*'],
          'markers': [
            '*package',
            '!',
            ',',
            ':',
            '::',
            'flow-include'
          ]
        },
        'line': {
          'markers': [
            '*package',
            '!',
            '/',
            ','
          ]
        }
      }
    ],
    'strict': ['error', 'function'],
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-typeof': ['error', { 'requireStringLiterals': true }],
    'vars-on-top': 'error',
    'wrap-iife': [
      'error',
      'any',
      { 'functionPrototypeMethods': true }
    ],
    'wrap-regex': 'off',
    'yield-star-spacing': ['error', 'both'],
    'yoda': ['error', 'never']
  }
};
