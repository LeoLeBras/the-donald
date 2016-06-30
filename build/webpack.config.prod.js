const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '',
  entry: [
    'babel-polyfill',
    'eventsource-polyfill',
    './src/index',
  ],
  resolve: {
    extensions: ['', '.js', '.css'],
    alias: {
      '@containers': path.join(__dirname, '../src/containers'),
      '@routes': path.join(__dirname, '../src/routes'),
      '@store': path.join(__dirname, '../src/store'),
      '@components': path.join(__dirname, '../src/components'),
      '@layouts': path.join(__dirname, '../src/layouts'),
      '@utils': path.join(__dirname, '../src/utils'),
      '@scenes': path.join(__dirname, '../src/scenes'),
    },
  },
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  module: {
    loaders: [{
      test: /\.(js)$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
        env: {
          development: {
            presets: ['react-hmre'],
          },
        },
        compact: false,
      },
      include: path.join(__dirname, '../src'),
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?modules&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss'
      ),
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file-loader?name=[path][name].[ext]',
      ]
    }, {
      test: /\.json?$/,
      loaders: ['json'],
    }],
  },
  postcss: () => ([
    require('autoprefixer')({
      browsers: '> 98%',
    })
  ])
};
