module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],

  // add rule here with comments.
  rules: {
    // limit the allowed nesting depth to 3
    'max-nesting-depth': 3,
    // disallow empty blocks.
    'block-no-empty': true,
    // selectors must be written in lowercase and match the regex
    'selector-class-pattern': [
      '^[a-z0-9\\-]+$|^el-|^van-',
      {
        message: 'Selector should be written in lowercase with hyphens (selector-class-pattern)',
      },
    ],
    // disallow units for zero lengths.
    'length-zero-no-unit': true,
    // allow 'v-deep' deep selector(for Sass)
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // allow keywords of Sass syntax
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'at-root',
          'content',
          'debug',
          'each',
          'else',
          'else if',
          'error',
          'extend',
          'for',
          'forward',
          'function',
          'if',
          'import',
          'include',
          'media',
          'mixin',
          'return',
          'use',
          'warn',
          'while',
        ],
      },
    ],
  },
};
