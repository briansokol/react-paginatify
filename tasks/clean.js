module.exports = function () {
  'use strict';

  return {
    dist: {
      src: ['<%= pathTo.dist %>']
    },
    lib: {
      src: ['<%= pathTo.lib %>']
    }
  };
};
