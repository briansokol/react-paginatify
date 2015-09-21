module.exports = function () {
  'use strict';

  return {
    options: {
      spawn: false
    },
    eslint: {
      files: ['<%= pathTo.jsSrc %>'],
      tasks: ['eslint']
    },
    webpack: {
      files: ['<%= pathTo.jsSrc %>'],
      tasks: ['webpack:serve']
    },
    sass: {
      files: ['<%= pathTo.sassSrc %>'],
      tasks: ['css:serve']
    }
  };
};