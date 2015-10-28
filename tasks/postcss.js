module.exports = function () {
  'use strict';

  return {
    serve: {
      options: {
        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: 'last 2 versions'})
        ],
        map: true
      },
      src: '<%= pathTo.cssSrc %>'
    },
    build: {
      options: {
        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
        ],
        map: false
      },
      src: '<%= pathTo.cssSrc %>'
    }
  }
};
