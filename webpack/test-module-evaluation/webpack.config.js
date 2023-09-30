const path = require('path');

module.exports = {
  entry: './test-module-evaluation/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};