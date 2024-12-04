const globals = require('globals');

const nextPlugin = require('@next/eslint-plugin-next');

const reactConfig = require('./react');

module.exports = [
  ...reactConfig,
  {
    ignores: ['.next/*'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules
    }
  },
  {
    ignores: ['.next/*', 'next-env.d.ts']
  }
];
