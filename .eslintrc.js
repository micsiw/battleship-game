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
  ignorePatterns: ["**/src/modules/tests"],
  rules: {
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
  },
};
