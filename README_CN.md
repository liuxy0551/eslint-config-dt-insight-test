# [eslint-config-dt-insight-test]([homepage-url]) [![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[ci-image]: https://github.com/liuxy0551/eslint-config-dt-insight-test/actions/workflows/CI.yml/badge.svg?branch=master
[ci-url]: https://github.com/liuxy0551/eslint-config-dt-insight-test/actions/workflows/CI.yml
[npm-image]: https://img.shields.io/npm/v/eslint-config-dt-insight-test.svg
[npm-url]: https://npmjs.org/package/eslint-config-dt-insight-test
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-dt-insight-test.svg
[downloads-url]: https://npmjs.org/package/eslint-config-dt-insight-test
[homepage-url]: https://github.com/liuxy0551/eslint-config-dt-insight-test

中文 | [English](./README.md)

#### 袋鼠云数栈前端的 eslint 配置

## 安装

``` bash
yarn add eslint-config-dt-insight-test -D
```

## 使用

可共享配置旨在让 `extends` 和 `.eslintrc` 文件配合使用，可以从 ESLint 官网 [可共享配置](http://eslint.org/docs/developer-guide/shareable-configs) 查看更多信息。

在 `.eslintrc` 文件中添加 `extends` 字段:

```
{
  "extends": "dt-insight"
}
```

*注意: 这里省略了 `eslint-config-` 前缀，ESLint 会自动添加上*

因为这是袋鼠云数栈前端的统一代码风格，所以 `eslint-config-dt-insight-test` 禁止使用自定义规则覆盖统一配置规则。

### 使用技巧

可以将 ESLint 的检查放到 `npm test` 中，或者配合 vscode 在保存时即进行 ESLint 校验。


## 了解更多

[Code-Style-Guide](https://github.com/liuxy0551/Code-Style-Guide)

## License

MIT. Copyright (c) 2022 dt-insight
