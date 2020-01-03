const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'happypack/loader?id=babel' }],
        exclude: /node_modules/,
      },
      {
        test: /\.(less|css)$/,
        use: [{ loader: 'happypack/loader?id=style' }]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: "images/[name].[ext]",
            publicPath: '../'
          }
        }],
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '*']
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '../'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    'prop-types': 'PropTypes'
  },
  optimization: {
    namedChunks: true,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'async',
      name: false,
    }
  },
  plugins: [
    new HappyPack({
      id: 'babel',
      threads: 4,
      loaders: ['react-hot-loader/webpack', 'babel-loader']
    }),
    new HappyPack({
      id: 'style',
      threads: 4,
      loaders: ['style-loader', 'css-loader', 'less-loader']
    }),
    new CleanWebpackPlugin()
  ]
}