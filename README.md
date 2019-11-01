# eslint-config-rtlnl-base

https://www.npmjs.com/package/@rtlnl/eslint-config-rtlnl-base

## Introduction

This is the base ESLint configuration file used at rtlnederland.

It is based on [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb) and [Prettier](https://www.npmjs.com/package/prettier).

## Installation

### NPM

```
npm install --save-dev eslint@latest eslint-plugin-import@latest @rtlnl/eslint-config-rtlnl-base prettier
```

### Yarn

```
yarn add --exact --dev eslint@latest eslint-plugin-import@latest @rtlnl/eslint-config-rtlnl-base prettier
```

### Your `.eslintrc`

To add the rules to your `.eslintrc`, extend the file with the package in the following manner:

```
{
  "extends": ["@rtlnl/rtlnl-base"]
}
```

Example:
```
.eslintrc.js
{
  "extends": [
    "@rtlnl/rtlnl-base"
  ],
  "env": {
    "node": true,
    "jest": true
  }
}


.prettierrc.js
module.exports = {
  ...require('@rtlnl/eslint-config-rtlnl-base/.prettierrc.js'),
  ...customParams
};


```
