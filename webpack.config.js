const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false
    }),
    new CopyWebpackPlugin({
        patterns: [
          { from: 'imgs', to: 'imgs' }, 
          { from: 'css', to: 'css' },
          { from: 'resources', to: 'resources'}
        ],
      }),
  ],
  
};