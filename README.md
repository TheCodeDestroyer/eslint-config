# eslint-config [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

## Installation

```sh
npm install eslint-config-tcd [eslint@4.19.1]
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs][shareable-configs-url] on the
official ESLint website.

To use this shareable config, first run this:

```sh
npm install --save-dev eslint@4.19.1 eslint-config-tcd
```

Then, add this to your .eslintrc(.js|.json|.yml) file:

```json
{
  "extends": "tcd"
}
```

*Note: We omitted the `/eslint-config` sufix since it is automatically assumed by ESLint. Only works for esnext since its specified as default*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### All available configs

* `tcd` or `eslint-config-tcd/configs/esnext` - ES6+ config
* `eslint-config-tcd/configs/es5` - ES5 config
* `eslint-config-tcd/configs/node` - ES6+ NodeJS config
* `eslint-config-tcd/configs/node-es5` - ES5 NodeJS config
* `eslint-config-tcd/configs/ng` - AngularJS config; Requires [eslint-plugin-angular][eslint-plugin-angular]
* `eslint-config-tcd/configs/react` - React config; Requires [eslint-plugin-react][eslint-plugin-react], [eslint-plugin-jsx-a11y][eslint-plugin-jsx-a11y]
* `eslint-config-tcd/configs/ts` - TypeScript config; Requires [typescript-eslint-parser][typescript-eslint-parser] (has `no-undef` bug: [#416][typescript-parser-bug-1]) and [eslint-plugin-typescript][eslint-plugin-typescript]



[//]: # (URLs)

[//]: # (main)

[npm-image]: https://img.shields.io/npm/v/thecodedestroyer/eslint-config-tcd.svg
[npm-url]: https://npmjs.org/package/thecodedestroyer/eslint-config-tcd
[downloads-image]: https://img.shields.io/npm/dm/thecodedestroyer/eslint-config-tcd.svg
[downloads-url]: https://npmjs.org/package/thecodedestroyer/eslint-config-tcd
[shareable-configs-url]: http://eslint.org/docs/developer-guide/shareable-configs

[//]: # (other)

[eslint-plugin-angular]: https://www.npmjs.com/package/eslint-plugin-angular
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[typescript-eslint-parser]: https://www.npmjs.com/package/typescript-eslint-parser
[eslint-plugin-typescript]: https://www.npmjs.com/package/eslint-plugin-typescript

[//]: # (TS bugs)

[typescript-parser-bug-1]: https://github.com/eslint/typescript-eslint-parser/issues/416
