const js = require("@eslint/js");
const globals = require("globals");
const react = require("eslint-plugin-react");
const prettierPlugin = require("eslint-plugin-prettier");
const configPrettier = require("eslint-config-prettier");

module.exports = [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    files: ["eslint.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        $: "readonly",
        jQuery: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...configPrettier.rules,
      ...prettierPlugin.configs.recommended.rules,
      "prettier/prettier": "error",
      "no-console": "off",
      "no-debugger": "off",
    },
  },
];
