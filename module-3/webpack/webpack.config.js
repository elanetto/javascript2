const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "src/bundle.js",
    assetModuleFilename: "pages/[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3001,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Joke Website",
      filename: "index.html",
      template: "template.html",
    }),
  ],
  module: {
    rules: [
        // rules to follow when bundling files
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
},
};