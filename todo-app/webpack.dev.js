const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const path = require('path');

const devConfig = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    open: true,
    port: 3000,
    historyApiFallback: true,
  }
};

module.exports = merge(commonConfig, devConfig);
