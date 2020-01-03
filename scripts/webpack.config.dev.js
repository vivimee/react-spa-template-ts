const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dayjs = require('dayjs');
const webpackConfig = require('./webpack.config.base');

module.exports = merge(webpackConfig, {
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new HtmlWebpackPlugin({
      filename: `html/index.html`,
      template: './src/templates/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      publishVersion: dayjs().format('YYYYMMDDHHmm'),
      externalScripts: {
        react: 'https://cdn.bootcss.com/react/16.10.2/umd/react.development.js',
        reactDOM: 'https://cdn.bootcss.com/react-dom/16.10.2/umd/react-dom.development.js',
        reactRouter: 'https://cdn.bootcss.com/react-router-dom/5.1.2/react-router-dom.js',
        propTypes: 'https://cdn.bootcss.com/prop-types/15.7.2/prop-types.js'
      }
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    openPage: 'html/index.html',
    stats: {
      colors: true,
      timings: true,
      errors: true,
      performance: true,
      warnings: true,
      entrypoints: false,
      hash: false,
      builtAt: false,
      publicPath: false,
      reasons: false,
      version: false,
      modules: false,
      moduleTrace: false,
      errorDetails: false,
      assets: false,
      cached: false,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      chunkOrigins: false,

    }
  },
});
