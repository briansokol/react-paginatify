module.exports = function () {
  'use strict';

  return {
    serve: {
      options: {
        outputStyle: 'expanded',
        sourceMap: true,
        sourceMapEmbed: true
      },
      files: {
        '<%= pathTo.sassDist %>/<%= pkg.name %>.css': '<%= pathTo.sassEntry %>'
      }
    },
    build: {
      options: {
        outputStyle: 'expanded',
        sourceMap: false
      },
      files: {
        '<%= pathTo.sassDist %>/<%= pkg.name %>.css': '<%= pathTo.sassEntry %>'
      }
    }
  };
};