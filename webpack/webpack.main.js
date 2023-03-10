const path = require("path");
const baseConfig = require("./webpack.base.js");
const webpackMerge = require("webpack-merge");

const mainConfig = {
  entry: path.resolve(__dirname, "../app/main/index.ts"),
  target: "electron-main",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build"),
  },
  devtool: "inline-source-map",
  mode: "development",
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
