module.exports = function () {
  'use strict';

  return {
    dist: {
      src: ['<%= pathTo.dist %>']
    },
    sourcemaps: {
      src: ['<%= pathTo.cssDist %>/*.css.map']
    }
  };
};
