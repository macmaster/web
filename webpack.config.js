const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
