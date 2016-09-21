'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = cx;
function cx() {
  var appliedClasses = [];

  for (var _len = arguments.length, classes = Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  classes.forEach(function (className) {
    if (typeof className === 'string') {
      appliedClasses.push(className);
    } else if (className !== null && (typeof className === 'undefined' ? 'undefined' : _typeof(className)) === 'object' && Object.prototype.toString.call(className) !== '[object Array]') {
      appliedClasses = appliedClasses.concat(Object.keys(className).filter(function (key) {
        return className[key];
      }));
    }
  });

  return appliedClasses.join(' ');
}
//# sourceMappingURL=cx.js.map