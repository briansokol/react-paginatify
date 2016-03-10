module.exports = function () {
  'use strict';

  var browsers = [
    "Android 2.3",
    "Android >= 4",
    "Chrome >= 20",
    "Firefox >= 24",
    "Explorer >= 9",
    "iOS >= 6",
    "Opera >= 12",
    "Safari >= 6"
  ];

  return {
    build: {
      options: {
        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: browsers})
        ],
        map: true
      },
      src: '<%= pathTo.cssSrc %>'
    }
  }
};
