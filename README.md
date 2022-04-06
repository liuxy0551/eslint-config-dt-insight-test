# [eslint-config-dt-insight]([homepage-url]) [![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[ci-image]: https://github.com/DTStack/eslint-config-dt-insight/actions/workflows/ci.yml/badge.svg?branch=master
[ci-url]: https://github.com/DTStack/eslint-config-dt-insight/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/eslint-config-dt-insight.svg
[npm-url]: https://npmjs.org/package/eslint-config-dt-insight
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-dt-insight.svg
[downloads-url]: https://npmjs.org/package/eslint-config-dt-insight
[homepage-url]: https://github.com/DTStack/eslint-config-dt-insight

English | [中文](./README_CN.md)

#### An eslint shareable config for dt-insight

## Install

``` bash
yarn add eslint-config-dt-insight -D
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Then, add this to your `.eslintrc` file:

```
{
  "extends": "dt-insight"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can not override settings. Because this is a Code Style Guide for dt-insight.

### Looking for something easier than this?

You can add to your `npm test` script or check when save to quickly check your style.


## Learn more

[Code-Style-Guide](https://github.com/DTStack/Code-Style-Guide)

## License

MIT. Copyright (c) 2022 dt-insight
