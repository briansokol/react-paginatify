module.exports = function () {
  'use strict';

  return {
    options: {
      processors: [
        require('pixrem')(),
        require('autoprefixer')({browsers: 'last 2 versions'}),
        require('cssnano')()
      ]
    },
    serve: {
      options: {
        map: true
      },
      src: '<%= pathTo.cssSrc %>'
    },
    build: {
      options: {
        map: false
      },
      src: '<%= pathTo.cssSrc %>'
    }
  }
};
