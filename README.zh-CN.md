# @7inch/stylelint-config

[![npm](https://img.shields.io/npm/v/@7inch/stylelint-config)](https://npmjs.com/package/@7inch/stylelint-config)

[English](README.md) | [中文](README.zh-CN.md)

## 介绍

我的 stylelint 配置，它是友好的，适用于 scss / tailwind / windicss / element plus/ vant。

## 安装

```sh
npm i stylelint prettier @7inch/stylelint-config -D
```

## 用法

### 配置 `.stylelintrc.js`

```js
module.exports = {
  extends: ["@7inch/stylelint-config"],
};
```

### 配置 `.stylelintignore`

```txt
dist
public
```

### 在`package.json`中添加 stylelint 脚本

```json
{
  "scripts": {
    "stylelint": "stylelint \"**/*.{vue,css,scss}\" --fix"
  }
}
```

### 配置 VSCode 代码自动修复

创建 `.vscode/settings.json`

```js
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```

更多使用详情请移步 [stylelint 文档](https://stylelint.io/user-guide/configure) 。

# License

Made with ❤️ Published under [MIT License](./LICENSE).
