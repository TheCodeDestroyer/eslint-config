const defaultConfig = require('./default');
const globals = require('globals');

module.exports = [
  ...defaultConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
];
