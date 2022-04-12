# [eslint-config-dt-insight-test]([homepage-url]) [![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[ci-image]: https://github.com/liuxy0551/eslint-config-dt-insight-test/actions/workflows/CI.yml/badge.svg?branch=master
[ci-url]: https://github.com/liuxy0551/eslint-config-dt-insight-test/actions/workflows/CI.yml
[npm-image]: https://img.shields.io/npm/v/eslint-config-dt-insight-test.svg
[npm-url]: https://npmjs.org/package/eslint-config-dt-insight-test
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-dt-insight-test.svg
[downloads-url]: https://npmjs.org/package/eslint-config-dt-insight-test
[homepage-url]: https://github.com/liuxy0551/eslint-config-dt-insight-test

<p align="center">
  <a href="./README_CN.md">简体中文 (Simplified Chinese)</a> 
  <a href="./README.md">English</a> 
</p>

## 袋鼠云数栈前端的 Code Style Guide

通过以下方式为你的项目节省时间：

- **无须配置规则** - 统一的代码风格，无须配置规则，轻松拥有。
- **自动代码格式化** - 只需运行 `yarn lint-fix` 从此和脏乱差的代码说再见。
- **提前发现风格及程序问题** - 减少 Code Review 过程中的人工审查，简单的事情交给工具做，节约时间。

无须犹豫。再也不用维护 `.eslintrc` 了，开箱即用。

## 细则

- **要求使用四个空格** – 进行缩进
- **要求字符串使用单引号** – 需要转义的地方除外
- **要求关键字后加空格** - `if (condition) { ... }`
- **要求函数名后不加空格** - `function name(arg) { ... }` 匿名函数、async 除外 `function (arg) { ... }` `async () { ... }`
- **不强制要求有无分号**
- **不强制使用 ===** - 后端返回的字段类型不敢保证
- **不强制三元运算符换行**
- **允许但不要求尾随逗号** - 当最后一个元素或属性与结束或属性位于不同的行时
- **允许函数内容为空**
- **允许 this 别名** - 别名可选 `self` `_this` `that`，不可以从 this 解构
- **要求无 debugger**
- **建议无 console**

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

你可以使用 `yarn lint-fix` 来纠正大部分的代码风格问题。

## 如何隐藏某类警告？

很少的情况下你需要绕开 `Code Style Guide` 以隐藏某些警告信息。

`eslint-config-dt-insight-test` 代码规范底层使用的是 [ESLint](http://eslint.org/)。所以如果你想隐藏某些警告，方法和使用 ESLint 时一样。

对某一行禁用**所有规则**：
```js
file = 'I know what I am doing' // eslint-disable-line
```

或者，**只禁**用 `"no-use-before-define"` 这条规则：
```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

或者，对**多行**禁用 `"no-use-before-define"` 这一规则：
```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

### 使用技巧

可以将 ESLint 的检查放到 `yarn lint` 命令中，vscode 安装 eslint 插件。


## 了解更多

[Code-Style-Guide](https://github.com/liuxy0551/Code-Style-Guide)

## License

MIT. Copyright (c) 2022 dt-insight
