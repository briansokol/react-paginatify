module.exports = function () {
  'use strict';

  return {
    static: {
      files: [{
        expand: true,
        cwd: '<%= pathTo.staticSrc %>',
        src: ['**/*'],
        dest: '<%= pathTo.staticDest %>'
      }]
    }
  };
}
