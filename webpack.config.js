const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.(js|jsx|tsx|ts)$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        compilerOptions: {
          noEmit: false
        }
      },
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: "todoList",
      filename: "remoteEntry.js",
      exposes: {
        ".": "./src/App"
      },
      shared: {
        react: {
          singleton: true,
          eager: true
        },
        "react-dom": {
          singleton: true,
          eager: true
        }
      },
    })
  ]
};