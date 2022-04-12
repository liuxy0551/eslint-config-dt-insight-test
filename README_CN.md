# [eslint-config-dt-insight-test]([homepage-url]) [![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[ci-image]: https://github.com/liuxy0551/eslint-config-dt-insight-test/actions/workflows/CI.yml/badge.svg?branch=master
[ci-url]: https://github.com/liuxy0551/eslint-config-dt-insight-test/actions/workflows/CI.yml
[npm-image]: https://img.shields.io/npm/v/eslint-config-dt-insight-test.svg
[npm-url]: https://npmjs.org/package/eslint-config-dt-insight-test
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-dt-insight-test.svg
[downloads-url]: https://npmjs.org/package/eslint-config-dt-insight-test
[homepage-url]: https://github.com/liuxy0551/eslint-config-dt-insight-test

[简体中文 (Simplified Chinese)](./README_CN.md) | [English](./README.md)

#### 袋鼠云数栈前端的 Code Style Guide

通过以下三种方式为你的项目节省大量时间：

- **无须配置规则** 统一的代码风格，无须配置规则，轻松拥有。
- **自动代码格式化** 只需运行 `yarn lint-fix` 从此和脏乱差的代码说再见。
- **提前发现风格及程序问题** 减少 Code Review 过程中的人工审查，简单的事情交给工具做，节约时间。

无须犹豫。再也不用维护 `.eslintrc` 了，开箱即用。


## 安装

``` bash
yarn add eslint-config-dt-insight-test -D
```

## 使用

可共享配置旨在让 `extends` 和 `.eslintrc` 文件配合使用，可以从 ESLint 官网 [可共享配置](http://eslint.org/docs/developer-guide/shareable-configs) 查看更多信息。

1、在 `.eslintrc` 文件中添加 `extends` 字段:

``` js
{
  "extends": "dt-insight"
}
```

*注意: 这里省略了 `eslint-config-` 前缀，ESLint 会自动添加上*

因为这是袋鼠云数栈前端的统一代码风格，所以 `eslint-config-dt-insight-test` 禁止使用自定义规则覆盖统一配置规则。

2、在 `package.json` 文件中添加 script:

``` json
"scripts": {
  "lint": "npx eslint './src/**/*.ts' './src/**/*.tsx'",
  "lint-fix": "npx eslint './src/**/*.ts' './src/**/*.tsx' --fix"
},
```

### 使用技巧

可以将 ESLint 的检查放到 `yarn lint` 命令中，vscode 安装 eslint 插件。


## 了解更多

[Code-Style-Guide](https://github.com/liuxy0551/Code-Style-Guide)

## License

MIT. Copyright (c) 2022 dt-insight
