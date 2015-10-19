module.exports = function () {
  'use strict';

  var webpack = require("webpack");

  return {
    options: {
      cache: true,
      entry: '<%= pathTo.jsEntry %>',
      output: {
        path: '<%= pathTo.jsDist %>',
        library: 'react-paginatify',
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
      module: {
        loaders: [
          {
            loader: 'babel-loader',
            test: /\.jsx$/,
            include: [
              '<%= pathTo.src %>'
            ],
            exclude: /(node_modules|bower_components)/
          }
        ]
      },
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
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
      ]
    },
    serve: {
      output: {
        filename: '<%= pkg.name %>.js'
      },
      devtool: 'inline-source-map',
      debug: true
    }
  };
};