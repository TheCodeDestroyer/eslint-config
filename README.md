# eslint-config (ARCHIVED) [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

**❗ This repository and the `eslint-config-tcd` package are now archived and no longer maintained. ❗**

**All configurations have been moved to a new monorepo named "devkit" and significantly updated for ESLint v9+ (Flat Config).**

## New Location & Packages

Please migrate to the new configurations available in the **[@tcd-devkit monorepo: TheCodeDestroyer/devkit](https://github.com/TheCodeDestroyer/devkit)**.

The new packages are published under the `@tcd-devkit` npm scope. For example, if you were using `eslint-config-tcd/configs/next`, you will now look for a package like `@tcd-devkit/eslint-preset-next`.

**Key changes in the new system:**
*   **ESLint v9+ Flat Config:** The new configurations exclusively use the modern `eslint.config.js` (flat config) format.
*   **Modular Packages:** The system is now more modular, with granular `eslint-config-*` packages and convenient `eslint-preset-*` packages.
*   **Improved Dependency Management:** ESLint plugins are now direct dependencies of the config/preset packages, simplifying setup for users.

**Please visit the new repository for updated installation and usage instructions:**
➡️ **[https://github.com/TheCodeDestroyer/devkit](https://github.com/TheCodeDestroyer/devkit)** ⬅️

---

*Original README content below (for historical reference only):*

---

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
