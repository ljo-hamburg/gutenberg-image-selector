const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "image-selector.js",
    library: "imageSelector",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  devtool: "source-map",
  externals: [/^@wordpress\/.+$/, "react", "prop-types"],
  optimization: {
    runtimeChunk: true,
  },
};
