module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["**/src/modules/tests", "**/dist/main.js"],
  rules: {
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
  },
};
