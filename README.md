# [eslint-config-dt-insight-test]([homepage-url]) [![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[ci-image]: https://github.com/liuxy0551/eslint-config-dt-insight-test/actions/workflows/CI.yml/badge.svg?branch=master
[ci-url]: https://github.com/liuxy0551/eslint-config-dt-insight-test/actions/workflows/CI.yml
[npm-image]: https://img.shields.io/npm/v/eslint-config-dt-insight-test.svg
[npm-url]: https://npmjs.org/package/eslint-config-dt-insight-test
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-dt-insight-test.svg
[downloads-url]: https://npmjs.org/package/eslint-config-dt-insight-test
[homepage-url]: https://github.com/liuxy0551/eslint-config-dt-insight-test

[English](./README.md) | [简体中文 (Simplified Chinese)](./README_CN.md)

#### An eslint shareable config for dt-insight Code Style Guide

This module saves time in three ways for you:

- **No configuration** The easier way to enforce code quality in your
  project. No configuration rules. It just works.
- **Automatically format code** Just run `yarn lint-fix` and say goodbye to
  messy or inconsistent code.
- **Catch style issues & programmer errors early** Reduce manual review in the code review process, and leave simple things to tools to save time.

No hesitation. No more maintenance `.eslintrc`. Give it a try right now!

## Install

``` bash
yarn add eslint-config-dt-insight-test -D
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

1、Then, add this to your `.eslintrc` file:

``` js
{
  "extends": "dt-insight"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can not override settings. Because this is a Code Style Guide for dt-insight's project.

2、Add script to `package.json`:

``` json
"scripts": {
  "lint": "npx eslint './src/**/*.ts' './src/**/*.tsx'",
  "lint-fix": "npx eslint './src/**/*.ts' './src/**/*.tsx' --fix"
},
```


### Looking for something easier than this?

You can add to your `yarn lint` script and install eslint plugin for vscode.


## Learn more

[Code-Style-Guide](https://github.com/liuxy0551/Code-Style-Guide)

## License

MIT. Copyright (c) 2022 dt-insight
