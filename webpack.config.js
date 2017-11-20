const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [new CopyWebpackPlugin([{from: 'public'}])],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
};
