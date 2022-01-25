module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-config-prettier"],

  rules: {
    // limit the allowed nesting depth to 3
    "max-nesting-depth": 3,
    // disallow empty blocks.
    "block-no-empty": true,
    // selectors must be written in lowercase and match the regex(exclude element UI and Vant UI)
    "selector-class-pattern": [
      "^[a-z0-9\\-]+$|^el-|^van-",
      {
        message: "Selector should be written in lowercase with hyphens (selector-class-pattern)",
      },
    ],
    // disallow units for zero lengths.
    "length-zero-no-unit": true,
    // allow 'v-deep' deep selector(for Sass)
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
    // allow rules of Sass/tailwind/windicss
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "at-root",
          "content",
          "debug",
          "each",
          "else",
          "else if",
          "error",
          "extend",
          "for",
          "forward",
          "function",
          "if",
          "import",
          "include",
          "media",
          "mixin",
          "return",
          "use",
          "warn",
          "while",
          // tailwind/windicss directives
          "tailwind",
          "apply",
          "layer",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
  },
};
