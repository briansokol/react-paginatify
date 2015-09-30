module.exports = function () {
  'use strict';

  var webpack = require("webpack");

  return {
    options: {
      cache: true,
      entry: '<%= pathTo.jsEntry %>',
      output: {
        path: '<%= pathTo.jsDist %>',
        filename: '<%= pkg.name %>.js'
      },
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
      devtool: 'inline-source-map',
      debug: true
    }
  };
};