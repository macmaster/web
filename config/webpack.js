const path = require('path');
const src_dir = 'client';
const build_dir = 'site';

module.exports = {
  mode: 'development',
  entry: path.resolve(src_dir, 'index.js'),

  output: {
    filename: '[name].js',
    path: `${path.resolve(build_dir)}/js`,
  },

  module: {
    rules: [{ 
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          "@babel/preset-react",
          "@babel/preset-env",
        ],
        plugins: [
          "transform-class-properties",
        ]
      }
    }]
  },

  resolve: {
    modules: [
      path.resolve(src_dir),
      path.resolve('node_modules')
    ]
  }
};
