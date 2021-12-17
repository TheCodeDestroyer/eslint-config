# eslint-config [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

## Installation

```sh
npm install eslint-config-tcd [eslint@7.17]
# OR
yarn add  eslint-config-tcd [eslint@7.17]
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs][shareable-configs-url] on the
official ESLint website.

To use this shareable config, first run this:

```sh
npm install --save-dev eslint@7.17 eslint-config-tcd
# OR
yarn add --dev eslint@7.17 eslint-config-tcd
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

* `tcd/configs/esnext` - ES6+ config; Requires [babel-eslint@10.1.0][babel-eslint]
* `tcd/configs/es5` - ES5 config
* `tcd/configs/node` - ES6+ NodeJS config; Requires [babel-eslint@10.1.0][babel-eslint]
* `tcd/configs/node-es5` - ES5 NodeJS config
* `tcd/configs/ng` - AngularJS config; Requires [eslint-plugin-angular@4.0.1][eslint-plugin-angular]
* `tcd/configs/react` - React config; Requires [babel-eslint@10.1.0][babel-eslint], [eslint-plugin-react@7.22.0][eslint-plugin-react], [eslint-plugin-jsx-a11y@6.4.1][eslint-plugin-jsx-a11y], [eslint-plugin-react-hooks@4.2.0][eslint-plugin-react-hooks]
* `tcd/configs/ts` - TypeScript config; Requires [typescript@4.1.3][typescript], [@typescript-eslint/eslint-plugin@4.12.0][@typescript-eslint/eslint-plugin], [@typescript-eslint/parser@4.12.0][@typescript-eslint/parser]



[//]: # (URLs)

[//]: # (main)

[npm-image]: https://img.shields.io/npm/v/eslint-config-tcd.svg
[npm-url]: https://npmjs.org/package/eslint-config-tcd
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-tcd.svg
[downloads-url]: https://npmjs.org/package/eslint-config-tcd
[shareable-configs-url]: http://eslint.org/docs/developer-guide/shareable-configs

[//]: # (other)

[babel-eslint]: https://www.npmjs.com/package/babel-eslint
[eslint-plugin-angular]: https://www.npmjs.com/package/eslint-plugin-angular
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[typescript]: https://www.npmjs.com/package/typescript
[@typescript-eslint/parser]: https://www.npmjs.com/package/@typescript-eslint/parser
[@typescript-eslint/eslint-plugin]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin

