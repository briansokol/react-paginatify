const webpack = require('webpack');
const path    = require('path');
const pkg     = require('./package.json');

const PROD = process.env.NODE_ENV === 'production';

let plugins = !PROD
  ? []
  : [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    }
  })
];

const preLoaders = PROD
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

  devtool: PROD ? '' : 'source-map',

  cache: true,

  entry: path.resolve(__dirname, 'esm/react-paginatify'),

  output: {
    filename: pkg.name + (PROD ? '.min' : '') + '.js',
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
    extensions: [ '', '.js' ]
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