const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/correctEmailTypos.js',
  output: {
    filename: 'correctEmailTypos.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
