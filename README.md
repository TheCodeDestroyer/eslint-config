# eslint-config [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

## Installation

```sh
npm install eslint-config-tcd [eslint@6.8.0]
# OR
yarn add  eslint-config-tcd [eslint@6.8.0]
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs][shareable-configs-url] on the
official ESLint website.

To use this shareable config, first run this:

```sh
npm install --save-dev eslint@6.5.0 eslint-config-tcd
# OR
yarn add --dev eslint@6.5.0 eslint-config-tcd
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

* `tcd/configs/esnext` or `eslint-config-tcd/configs/esnext` - ES6+ config; Requires [babel-eslint@10.0.3][babel-eslint]
* `tcd/configs/es5` or `eslint-config-tcd/configs/es5` - ES5 config
* `tcd/configs/node` or `eslint-config-tcd/configs/node` - ES6+ NodeJS config; Requires [babel-eslint@10.0.3][babel-eslint]
* `tcd/configs/node-es5` or `eslint-config-tcd/configs/node-es5` - ES5 NodeJS config
* `tcd/configs/ng` or `eslint-config-tcd/configs/ng` - AngularJS config; Requires [eslint-plugin-angular@4.0.1][eslint-plugin-angular]
* `tcd/configs/react` or `eslint-config-tcd/configs/react` - React config; Requires [babel-eslint@10.0.3][babel-eslint], [eslint-plugin-react@7.18.0][eslint-plugin-react], [eslint-plugin-jsx-a11y@6.2.3][eslint-plugin-jsx-a11y]
* `tcd/configs/reac-native` or `eslint-config-tcd/configs/react-native` - React Native config; Requires [babel-eslint@10.0.3][babel-eslint], [eslint-plugin-react@7.18.0][eslint-plugin-react], [eslint-plugin-jsx-a11y@6.2.3][eslint-plugin-jsx-a11y] and [eslint-plugin-react-native@3.7.0][eslint-plugin-react-native]
* `tcd/configs/ts` or `eslint-config-tcd/configs/ts` - TypeScript config; Requires [@typescript-eslint/eslint-plugin@2.17.0][@typescript-eslint/eslint-plugin] and [@typescript-eslint/parser@2.17.0][@typescript-eslint/parser]



[//]: # (URLs)

[//]: # (main)

[npm-image]: https://img.shields.io/npm/v/@3fs/eslint-config.svg
[npm-url]: https://npmjs.org/package/@3fs/eslint-config
[downloads-image]: https://img.shields.io/npm/dm/@3fs/eslint-config.svg
[downloads-url]: https://npmjs.org/package/@3fs/eslint-config
[shareable-configs-url]: http://eslint.org/docs/developer-guide/shareable-configs

[//]: # (other)

[babel-eslint]: https://www.npmjs.com/package/babel-eslint
[eslint-plugin-angular]: https://www.npmjs.com/package/eslint-plugin-angular
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[@typescript-eslint/parser]: https://www.npmjs.com/package/@typescript-eslint/parser
[@typescript-eslint/eslint-plugin]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[eslint-plugin-react-native]: https://www.npmjs.com/package/eslint-plugin-react-native

