'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/assets/js/script.js',
  output: {
    filename: 'scripts.min.js',
    path: __dirname + '/dist/assets/' + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
     
    ]
  }
};
