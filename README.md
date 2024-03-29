# eslint-config [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

#### An ESLint [Shareable Config][shareable-configs-url]

## Installation

```sh
npm install eslint-config-tcd eslint
# OR
yarn add  eslint-config-tcd eslint
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

* `tcd/configs/esnext` - ES6+ config
* `tcd/configs/node` - ES6+ NodeJS config
* `tcd/configs/react` - React config; Requires [eslint-plugin-react][eslint-plugin-react], [eslint-plugin-jsx-a11y][eslint-plugin-jsx-a11y], [eslint-plugin-react-hooks][eslint-plugin-react-hooks]
* `tcd/configs/ts` - TypeScript config; Requires [typescript][typescript], [@typescript-eslint/eslint-plugin][@typescript-eslint/eslint-plugin], [@typescript-eslint/parser][@typescript-eslint/parser]
* `tcd/configs/next` - NextJS config; Requires [@next/eslint-plugin-next][@next/eslint-plugin-next], [eslint-plugin-react][eslint-plugin-react], [eslint-plugin-jsx-a11y][eslint-plugin-jsx-a11y], [eslint-plugin-react-hooks][eslint-plugin-react-hooks]


[//]: # (URLs)

[//]: # (main)
[npm-image]: https://img.shields.io/npm/v/eslint-config-tcd.svg
[npm-url]: https://npmjs.org/package/eslint-config-tcd
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-tcd.svg
[downloads-url]: https://npmjs.org/package/eslint-config-tcd
[shareable-configs-url]: http://eslint.org/docs/developer-guide/shareable-configs

[//]: # (other)
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[typescript]: https://www.npmjs.com/package/typescript
[@typescript-eslint/parser]: https://www.npmjs.com/package/@typescript-eslint/parser
[@typescript-eslint/eslint-plugin]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[@next/eslint-plugin-next]: https://www.npmjs.com/package/@next/eslint-plugin-next


