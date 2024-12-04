# eslint-config [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

## Installation

```sh
npm install eslint-config-tcd eslint
# OR
yarn add  eslint-config-tcd eslint
# OR
pnpm add  eslint-config-tcd eslint
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs][shareable-configs-url] on the
official ESLint website.

To use this shareable config, first run this:

```sh
npm install --save-dev eslint eslint-config-tcd
# OR
yarn add --dev eslint eslint-config-tcd
```

Then, add the config you need to your flat eslint.config.(.js|.json|.yml) file:

### MJS

```js
import defaultConfig from 'eslint-config-tcd';
import reactConfig from 'eslint-config-tcd/configs/react';

export default [
  defaultConfig,
  reactConfig,
  {
    files: ['*.ks', '*.jsx']
  }
];
```

### CJS

```js
const defaultConfig = require('eslint-config-tcd');
const reactConfig = require('eslint-config-tcd/configs/react');

module.exports = [
  defaultConfig,
  reactConfig,
  {
    files: ['*.ks', '*.jsx']
  }
];
```

### All available configs

- `eslint-config-tcd/configs/default` - ES6+ config
- `eslint-config-tcd/configs/node` - ES6+ NodeJS config
- `eslint-config-tcd/configs/react` - React config
- `eslint-config-tcd/configs/ts` - TypeScript config
- `eslint-config-tcd/configs/next` - NextJS config

[//]: # 'URLs'
[//]: # 'main'
[npm-image]: https://img.shields.io/npm/v/eslint-config-tcd.svg
[npm-url]: https://npmjs.org/package/eslint-config-tcd
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-tcd.svg
[downloads-url]: https://npmjs.org/package/eslint-config-tcd
[shareable-configs-url]: http://eslint.org/docs/developer-guide/shareable-configs
