/* eslint-disable */
require('dotenv').config()
const Dotenv = require('dotenv-webpack')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config = {
  devtool: 'inline-source-map',
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules\/(?!__tests__\/).*/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.svg'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    plugins: [
      // @ts-ignore
      new TsconfigPathsPlugin()
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js'
  }

  return config
}
