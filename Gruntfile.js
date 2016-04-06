module.exports = function(grunt) {
  'use strict';

  var path = require('path');
  require('load-grunt-tasks')(grunt);

  var pathTo        = {};
  pathTo.root       = path.join(__dirname);
  pathTo.dist       = path.join(__dirname, 'dist');
  pathTo.lib        = path.join(__dirname, 'lib');
  pathTo.src        = path.join(__dirname, 'src');
  pathTo.cssSrc     = path.join(pathTo.dist, 'css', '*');
  pathTo.cssDistRel = path.join('dist', 'css');
  pathTo.cssDist    = path.join(pathTo.root, pathTo.cssDistRel);
  pathTo.sassSrcDir = path.join(pathTo.src, 'scss');
  pathTo.sassSrc    = path.join('**', '*.scss');
  pathTo.sassDist   = path.join(pathTo.cssDistRel);
  pathTo.jsSrc      = path.join(pathTo.src, 'js', '**', '*.js');
  pathTo.jsEntry    = path.join(pathTo.src, 'js', 'paginatify.js');
  pathTo.jsTest     = path.join(pathTo.src, 'test', '**', '*.test.js');
  pathTo.jsDist     = path.join(pathTo.dist, 'js');
  pathTo.jsLib      = path.join(pathTo.lib, 'js');
  pathTo.jsLibExit  = path.join(pathTo.jsLib, 'react-paginatify.js');
  pathTo.test       = path.join(pathTo.root, 'test');

  var tasks = require('load-grunt-configs')(grunt, {
    config: {
      src: ['tasks/*.js']
    },
    pkg: grunt.file.readJSON('package.json'),
    pathTo: pathTo
  });

  grunt.initConfig(tasks);

  grunt.registerTask('dev', ['clean', 'sass', 'postcss', 'eslint', 'babel', 'webpack:serve', 'watch']);

  grunt.registerTask('build', ['clean', 'sass', 'postcss', 'eslint', 'babel', 'webpack']);

  grunt.registerTask('default', ['dev']);
};