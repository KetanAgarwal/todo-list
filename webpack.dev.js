const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};

module.exports = merge(commonConfig, devConfig);
