const webpack = require('webpack');
const path    = require('path');
const pkg     = require('./package.json');

const DEV    = process.env.NODE_ENV === 'develop';
const MINIFY = process.env.NODE_ENV === 'minify';

const plugins = !MINIFY
  ? []
  : [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    }
  })
];

const preLoaders = !DEV
  ? []
  : [
  {
    loader: 'eslint',
    test: /\.js$/,
    include: [ path.resolve(__dirname, 'esm') ],
    exclude: /(node_modules)/
  }
];

module.exports = {

  devtool: 'source-map',

  entry: path.resolve(__dirname, 'esm/react-paginatify'),

  output: {
    filename: pkg.name + (MINIFY ? '.min' : '') + '.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Paginatify',
    libraryTarget: 'umd'
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],

  target: 'web',

  resolve: {
    root: [ path.resolve(__dirname, 'esm') ],
    moduleDirectories: [ 'node_modules' ],
    extensions: [ '.js' ]
  },

  module: {

    preLoaders,

    loaders: [
      {
        loader: 'babel',
        test: /\.js$/,
        include: [ path.resolve(__dirname, 'esm') ],
        exclude: /(node_modules)/,
        query: {
          presets: [ 'es2015', 'react', 'stage-0' ]
        }
      }
    ]
  },
  plugins
};