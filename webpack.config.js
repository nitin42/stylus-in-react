const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");

const output = () => ({
  filename: "[name].js",
  path: path.resolve(__dirname, "build"),
  publicPath: "/",
  library: "stylus-in-react",
  libraryTarget: "umd"
});

const externals = () => ({
  "inline-style-prefixer": "inline-style-prefixer",
  "camel-case": "camel-case",
  css: "css",
  glamor: "glamor",
  "html-tags": "html-tags",
  react: "react",
  "common-tags": "common-tags"
});

const jsLoader = () => ({
  test: /\.js$/,
  include: path.resolve(__dirname, "src"),
  exclude: ["node_modules", "public", "images", "utils", "build", "__tests__"],
  use: "babel-loader"
});

const plugins = () => [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": "production"
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      comparisons: false
    },
    output: {
      comments: false,
      ascii_only: true
    }
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js)$/,
    threshold: 10240,
    minRatio: 0.8
  })
];

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: output(),
  target: "web",
  node: {
    fs: "empty"
  },
  performance: {
    hints: "error"
  },
  context: path.resolve(__dirname),
  devtool: "source-map",
  externals: externals(),
  module: {
    rules: [jsLoader()]
  },
  plugins: plugins()
};
