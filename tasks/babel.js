module.exports = function () {
  'use strict';

  return {
    options: {
      sourceMap: true
    },
    lib: {
      files: {
        '<%= pathTo.jsLibExit %>': '<%= pathTo.jsEntry %>'
      }
    }
  };
}