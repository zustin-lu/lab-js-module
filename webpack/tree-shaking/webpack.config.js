const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  // mode: 'production',
  
  entry: {
    cjs: path.resolve(__dirname, 'cjs/index.js'),
    esm: path.resolve(__dirname, 'esm/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
