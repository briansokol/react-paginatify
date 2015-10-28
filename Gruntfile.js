module.exports = function (grunt) {
  'use strict';

  var path = require('path');
  require('load-grunt-tasks')(grunt);

  var pathTo       = {};
  pathTo.dist      = path.join(__dirname, 'dist');
  pathTo.lib       = path.join(__dirname, 'lib');
  pathTo.src       = path.join(__dirname, 'src');
  pathTo.cssSrc    = path.join(pathTo.dist, 'css', '*');
  pathTo.cssDist   = path.join(pathTo.dist, 'css');
  pathTo.cssLib    = path.join(pathTo.lib, 'css');
  pathTo.cssExit   = path.join(pathTo.cssDist, 'react-paginatify.css');
  pathTo.sassSrc   = path.join(pathTo.src, 'scss', '**', '*.scss');
  pathTo.sassEntry = path.join(pathTo.src, 'scss', 'paginatify.scss');
  pathTo.sassDist  = path.join(pathTo.cssDist);
  pathTo.sassLib   = path.join(pathTo.cssLib);
  pathTo.jsSrc     = path.join(pathTo.src, 'js', '**', '*.js');
  pathTo.jsEntry   = path.join(pathTo.src, 'js', 'paginatify.js');
  pathTo.jsTest    = path.join(pathTo.src, 'test', '**', '*.test.js');
  pathTo.jsDist    = path.join(pathTo.dist, 'js');
  pathTo.jsLib     = path.join(pathTo.lib, 'js');
  pathTo.jsLibExit = path.join(pathTo.jsLib, 'react-paginatify.js');

  var tasks = require('load-grunt-configs')(grunt, {
    config: {
      src: ['tasks/*.js']
    },
    pkg: grunt.file.readJSON('package.json'),
    pathTo: pathTo
  });

  grunt.initConfig(tasks);

  grunt.registerTask('serve', ['clean', /* 'postcss:serve',*/ 'eslint', 'babel', 'webpack:serve', 'watch']);

  grunt.registerTask('build', ['clean', /* 'postcss',*/ 'babel', 'webpack']);

  grunt.registerTask('publish', ['eslint', 'clean', /* 'postcss',*/ 'babel', 'webpack']);

  grunt.registerTask('default', ['serve']);
};