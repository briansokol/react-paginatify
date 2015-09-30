module.exports = function (grunt) {
  'use strict';

  var path = require('path');
  require('load-grunt-tasks')(grunt);

  var pathTo       = {};
  pathTo.dist      = path.join(__dirname, 'dist');
  pathTo.src       = path.join(__dirname, 'src');
  pathTo.cssSrc    = path.join(pathTo.dist, 'css', '*');
  pathTo.cssDist   = path.join(pathTo.dist, 'css');
  pathTo.cssExit   = path.join(pathTo.cssDist, 'react-paginatify.css');
  pathTo.sassSrc   = path.join(pathTo.src, 'scss', '**', '*.scss');
  pathTo.sassEntry = path.join(pathTo.src, 'scss', 'paginatify.scss');
  pathTo.sassDist  = path.join(pathTo.cssDist);
  pathTo.jsSrc     = path.join(pathTo.src, 'js', '**', '*.jsx');
  pathTo.jsEntry   = path.join(pathTo.src, 'js', 'paginatify.jsx');
  pathTo.jsTest    = path.join(pathTo.src, 'test', '**', '*.test.jsx');
  pathTo.jsDist    = path.join(pathTo.dist, 'js');

  var tasks = require('load-grunt-configs')(grunt, {
    config: {
      src: ['tasks/*.js']
    },
    pkg: grunt.file.readJSON('package.json'),
    pathTo: pathTo
  });

  grunt.initConfig(tasks);

  grunt.registerTask('css:serve', ['sass:serve', 'clean:sourcemaps', 'postcss:serve']);
  grunt.registerTask('css:build', ['sass:build', 'postcss:build']);

  grunt.registerTask('serve', ['clean:dist', 'css:serve', 'eslint', 'webpack:serve', 'watch']);

  grunt.registerTask('build', ['clean:dist', 'css:build', 'webpack:build']);

  grunt.registerTask('default', ['serve']);
};