const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    publicPath: './',
    path: path.join(__dirname, 'build'),
    filename: '[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            ],
        },
        {
            test: /\.(ttf|eot|otf|svg|png)$/,
            loader: 'file-loader'
        },
        {
            test: /\.(woff|woff2)$/,
            loader: 'url-loader'
        }
    ]
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new CopyWebpackPlugin([{
      from: './src/index.html',
      to: '',
    }]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      files: {
        js: ['bundle.js'],
      },
    }),
  ],
};