module.exports = function () {

  return {
    serve: {
      options: {
        outputStyle: 'expanded',
        sourceMapEmbed: true
      },
      files: [{
        expand: true,
        cwd: '<%= pathTo.sassSrcDir %>',
        src: ['<%= pathTo.sassSrc %>'],
        dest: '<%= pathTo.cssDistRel %>',
        ext: '.css'
      }]
    }
  }
};