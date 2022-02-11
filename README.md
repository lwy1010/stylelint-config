# @7inch/stylelint-config

[![npm](https://img.shields.io/npm/v/@7inch/stylelint-config)](https://npmjs.com/package/@7inch/stylelint-config)

[English](README.md) | [中文](README.zh-CN.md)

## Introduction

My stylelint config, it's friendly and works well with scss / tailwind / windicss / element plus/ vant.

## Install

```sh
npm i stylelint prettier @7inch/stylelint-config -D
```

## Usage

### Config `.stylelintrc.js`

```js
module.exports = {
  extends: ["@7inch/stylelint-config"],
};
```

### Config `.stylelintignore`

```txt
dist
public
```

### Add script for package.json

```json
{
  "scripts": {
    "stylelint": "stylelint \"**/*.{vue,css,scss}\" --fix"
  }
}
```

### Config VSCode auto fix

Create `.vscode/settings.json`

```js
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```

Checkout [stylelint](https://stylelint.io/user-guide/configure) for more usage details.

# License

Made with ❤️ Published under [MIT License](./LICENSE).
