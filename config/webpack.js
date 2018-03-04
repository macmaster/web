const src_dir = 'src';
const public_dir = 'public';
const build_dir = 'build';
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(src_dir, 'index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(build_dir)
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: [ 'babel-loader' ] },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|jpg|gif|svg)$/, use: [ 'file-loader' ] }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: public_dir }
    ])
  ]
};

