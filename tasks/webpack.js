module.exports = function () {
  'use strict';

  var webpack = require("webpack");

  return {
    options: {
      cache: true,
      entry: '<%= pathTo.jsEntry %>',
      output: {
        path: '<%= pathTo.jsDist %>',
        library: 'Paginatify',
        libraryTarget: 'umd',
        umdNamedDefine: true
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
      module: {
        loaders: [
          {
            loader: 'babel-loader',
            test: /\.js$/,
            include: [
              '<%= pathTo.src %>'
            ],
            exclude: /(node_modules)/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
    },
    build: {
      output: {
        filename: '<%= pkg.name %>.min.js'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
            screw_ie8: true
          }
        })
      ]
    },
    serve: {
      output: {
        filename: '<%= pkg.name %>.js'
      },
      devtool: 'source-map',
      debug: true
    }
  };
};