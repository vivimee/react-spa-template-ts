const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const dayjs = require('dayjs');
const webpackConfig = require('./webpack.config.base');

module.exports = merge(webpackConfig, {
  mode: 'production',
  stats: "minimal",
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
  },
  optimization: {
    moduleIds: 'hashed',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("production")
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
        react: 'https://cdn.bootcss.com/react/16.10.2/umd/react.production.min.js',
        reactDOM: 'https://cdn.bootcss.com/react-dom/16.10.2/umd/react-dom.production.min.js',
        reactRouter: 'https://cdn.bootcss.com/react-router-dom/5.1.2/react-router-dom.js',
        propTypes: 'https://cdn.bootcss.com/prop-types/15.7.2/prop-types.js'
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ]
});
