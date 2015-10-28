module.exports = function() {
  'use strict';

  return {
    options: {
      configFile: '.eslintrc'
    },
    target: ['<%= pathTo.jsSrc %>']
  };
};
