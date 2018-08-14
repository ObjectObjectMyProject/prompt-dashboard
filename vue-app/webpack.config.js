const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {main: './src/js/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.bunle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'template/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
