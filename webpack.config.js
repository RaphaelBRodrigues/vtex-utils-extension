const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const PUBLIC_DIR = 'public';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackLiveReloadPlugin = require('html-webpack-live-reload-plugin');
const PORT = 3000;

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'main.js'),
    background: path.resolve(__dirname, 'src', 'background.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        test: /\.js$/,
      },
      {
        exclude: /node_modules/,
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico)/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './images',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, PUBLIC_DIR, 'index.html'),
      title: 'VTEX Utils',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackLiveReloadPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, PUBLIC_DIR),
    port: PORT,
  },
  resolve: {
    alias: {
      '@Elements': path.resolve(__dirname, 'src', 'js', 'elements'),
      '@Constants': path.resolve(__dirname, 'src', 'js', 'constants'),
      '@Services': path.resolve(__dirname, 'src', 'js', 'services'),
      '@Utils': path.resolve(__dirname, 'src', 'js', 'utils'),
    },
  },
};
