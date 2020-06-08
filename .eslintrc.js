module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jquery: true,
    es6: true,
  },
  plugins: ["prettier"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
};
