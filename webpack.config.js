const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  watch: true,
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
