var resolve = require("path").resolve;

module.exports = {
  entry: "./entry.js",
  output: {
    path: resolve("dist"),
    filename: "./bundle.js",
    publicPath: "/dist/"
  }
};
