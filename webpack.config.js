const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackLiveReloadPlugin = require('html-webpack-live-reload-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const PUBLIC_DIR = 'views';
const PORT = 3000;

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'main.ts'),
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
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        test: /\.js$/,
      },
      {
        test: /.json/,
        type: 'asset/resource',
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
        test: /\.(jpe?g|png|svg|gif|ico|woff2?)/i,
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './manifest.json',
        },
        {
          from: './src/assets/icons/',
          to: './images',
        },
        {
          from: './_locales',
          to: './_locales',
        },
      ],
    }),
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
  devtool: 'cheap-module-source-map',
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, PUBLIC_DIR),
    port: PORT,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@Elements': path.resolve(__dirname, 'src', 'js', 'elements'),
      '@Constants': path.resolve(__dirname, 'src', 'js', 'constants'),
      '@Services': path.resolve(__dirname, 'src', 'js', 'services'),
      '@Utils': path.resolve(__dirname, 'src', 'js', 'utils'),
      '@Types': path.resolve(__dirname, 'src', 'js', 'types'),
    },
  },
};
