const nodeConfig = require('./configs/node');

module.exports = [
  ...nodeConfig,
  {
    files: ['**/*.js'],
    rules: {
      'sort-keys': 'error'
    }
  }
];
