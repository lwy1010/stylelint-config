# @7inch/stylelint-config

[English](README.md) | [中文](README.zh-CN.md)

## 介绍

一份简单实用的 stylelint 配置，适用于 scss/tailwind/windicss 。

## 安装

```sh
npm i stylelint prettier @7inch/stylelint-config -D
```

## 用法

在项目的根目录下创建一个.stylelintrc.js 配置文件：

```js
module.exports = {
  extends: ['@7inch/stylelint-config'],
};
```

同时，给 VSCode 装上 stylelint 和 prettier 插件，并在设置中加入以下的配置：

```js
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
}
```

更多关于 stylelint 的配置请移步 [stylelint 文档](https://stylelint.io/user-guide/configure)。
