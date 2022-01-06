# @7inch/stylelint-config

[English](README.md) | [中文](README.zh-CN.md)

## Introduction

A friendly stylelint config preset, it works well with scss / tailwind / windicss.

## Install

```sh
npm i stylelint prettier @7inch/stylelint-config -D
```

## Usage

create a .stylelintrc.js configuration file in the root of your project:

```js
module.exports = {
  extends: ['@7inch/stylelint-config'],
};
```

then install **stylelint** and **prettier** plugin for your vscode, and setup following config:

```js
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
}
```

checkout [Configuration](https://stylelint.io/user-guide/configure) to get more details.
