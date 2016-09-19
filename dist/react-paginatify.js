(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Paginatify"] = factory(require("react"));
	else
		root["Paginatify"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _cx = __webpack_require__(2);
	
	var _cx2 = _interopRequireDefault(_cx);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Paginatify = function (_React$Component) {
	  _inherits(Paginatify, _React$Component);
	
	  function Paginatify() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Paginatify);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Paginatify.__proto__ || Object.getPrototypeOf(Paginatify)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      page: _this.props.page
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Paginatify, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.page !== this.state.page) {
	        this.setState({
	          page: nextProps.page
	        });
	      }
	    }
	  }, {
	    key: 'setPage',
	    value: function setPage(newPage, button, e) {
	      e.preventDefault();
	      var oldPage = this.state.page;
	      this.setState({
	        page: newPage
	      });
	      if (typeof this.props.onChange === 'function') {
	        this.props.onChange(newPage, oldPage, button);
	      }
	    }
	  }, {
	    key: 'getPageLinks',
	    value: function getPageLinks() {
	      var output = [];
	
	      if (this.props.pages < 1) {
	        return output;
	      }
	
	      // if Total less than 2(Inner + Outer) + 5 AND NOT truncate short
	      if (this.props.truncateNever || this.props.pages < 2 * (this.props.innerPadding + this.props.outerPadding) + 5 && !this.props.truncateShort) {
	        // output 1 to Total
	        for (var i = 1; i <= this.props.pages; i += 1) {
	          output.push(this.getLinkToPage(i));
	        }
	        return output;
	      }
	
	      // if Page > Inner + Outer + 2
	      if (this.state.page > this.props.innerPadding + this.props.outerPadding + 2) {
	        // output 1 to Outer
	        for (var _i = 1; _i <= this.props.outerPadding; _i += 1) {
	          output.push(this.getLinkToPage(_i));
	        }
	        // output ...
	        output.push(this.getTruncator(1));
	        // output Page - Inner to Page - 1
	        for (var _i2 = this.state.page - this.props.innerPadding; _i2 <= this.state.page - 1; _i2 += 1) {
	          output.push(this.getLinkToPage(_i2));
	        }
	      } else {
	        // output 1 to Page - 1
	        for (var _i3 = 1; _i3 <= this.state.page - 1; _i3 += 1) {
	          output.push(this.getLinkToPage(_i3));
	        }
	      }
	
	      // output page
	      output.push(this.getLinkToPage(this.state.page));
	
	      // if Page < Total - (Inner + Outer + 1)
	      if (this.state.page < this.props.pages - this.props.innerPadding - this.props.outerPadding - 1) {
	        // output Page + 1 to Page + Inner
	        for (var _i4 = this.state.page + 1; _i4 <= this.state.page + this.props.innerPadding; _i4 += 1) {
	          output.push(this.getLinkToPage(_i4));
	        }
	        // output ...
	        output.push(this.getTruncator(2));
	        // output Total - (Outer - 1) to Total
	        for (var _i5 = this.props.pages - (this.props.outerPadding - 1); _i5 <= this.props.pages; _i5 += 1) {
	          output.push(this.getLinkToPage(_i5));
	        }
	      } else {
	        // output Page + 1 to Total
	        for (var _i6 = this.state.page + 1; _i6 <= this.props.pages; _i6 += 1) {
	          output.push(this.getLinkToPage(_i6));
	        }
	      }
	
	      return output;
	    }
	  }, {
	    key: 'getPreviousLink',
	    value: function getPreviousLink() {
	      return _react2.default.createElement(
	        'button',
	        {
	          key: 'P',
	          className: (0, _cx2.default)('paginatify__link', 'paginatify__link--previous', { 'paginatify__link--disabled': this.state.page === 1 }),
	          onClick: this.state.page !== 1 ? this.setPage.bind(this, this.state.page - 1, 'previous') : null
	        },
	        this.props.prevLabel
	      );
	    }
	  }, {
	    key: 'getNextLink',
	    value: function getNextLink() {
	      return _react2.default.createElement(
	        'button',
	        {
	          key: 'N',
	          className: (0, _cx2.default)('paginatify__link', 'paginatify__link--next', { 'paginatify__link--disabled': this.state.page === this.props.pages }),
	          onClick: this.state.page !== this.props.pages ? this.setPage.bind(this, this.state.page + 1, 'next') : null
	        },
	        this.props.nextLabel
	      );
	    }
	  }, {
	    key: 'getLinkToPage',
	    value: function getLinkToPage(toPage) {
	      return _react2.default.createElement(
	        'button',
	        {
	          key: toPage,
	          className: (0, _cx2.default)('paginatify__link', 'paginatify__link--page', { 'paginatify__link--current': this.state.page === toPage }),
	          onClick: toPage !== this.state.page ? this.setPage.bind(this, toPage, 'page') : null
	        },
	        toPage
	      );
	    }
	  }, {
	    key: 'getTruncator',
	    value: function getTruncator(key) {
	      return _react2.default.createElement(
	        'span',
	        {
	          className: 'paginatify__truncation',
	          key: 'T' + key
	        },
	        this.props.truncateChar
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _cx2.default)('paginatify', this.props.className),
	          id: this.props.id
	        },
	        this.props.pages > 1 ? this.getPreviousLink() : null,
	        this.getPageLinks(),
	        this.props.pages > 1 ? this.getNextLink() : null
	      );
	    }
	  }]);
	
	  return Paginatify;
	}(_react2.default.Component);
	
	Paginatify.propTypes = {
	  page: _react2.default.PropTypes.number.isRequired,
	  pages: _react2.default.PropTypes.number.isRequired,
	  id: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string,
	  onChange: _react2.default.PropTypes.func,
	  innerPadding: _react2.default.PropTypes.number,
	  outerPadding: _react2.default.PropTypes.number,
	  nextLabel: _react2.default.PropTypes.string,
	  prevLabel: _react2.default.PropTypes.string,
	  truncateChar: _react2.default.PropTypes.string,
	  truncateShort: _react2.default.PropTypes.bool,
	  truncateNever: _react2.default.PropTypes.bool
	};
	Paginatify.defaultProps = {
	  page: 1,
	  pages: 1,
	  id: null,
	  className: null,
	  onChange: null,
	  innerPadding: 1,
	  outerPadding: 1,
	  nextLabel: '>',
	  prevLabel: '<',
	  truncateChar: '…',
	  truncateShort: false,
	  truncateNever: false
	};
	exports.default = Paginatify;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-paginatify.js.map