(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-paginatify"] = factory(require("react"));
	else
		root["react-paginatify"] = factory(root["React"]);
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
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Paginatify = function (_React$Component) {
	  _inherits(Paginatify, _React$Component);
	
	  function Paginatify(props) {
	    _classCallCheck(this, Paginatify);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Paginatify).call(this, props));
	
	    _this.props = props;
	    _this.state = { page: props.page };
	    return _this;
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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'paginatify' },
	        this.props.pages > 1 ? this.getPreviousLink() : null,
	        this.getPageLinks(),
	        this.props.pages > 1 ? this.getNextLink() : null
	      );
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
	        for (var i = 1; i <= this.props.pages; i++) {
	          output.push(this.getLinkToPage(i));
	        }
	        return output;
	      }
	
	      // if Page > Inner + Outer + 2
	      if (this.state.page > this.props.innerPadding + this.props.outerPadding + 2) {
	        // output 1 to Outer
	        for (var i = 1; i <= this.props.outerPadding; i++) {
	          output.push(this.getLinkToPage(i));
	        }
	        // output ...
	        output.push(this.getTruncator(1));
	        // output Page - Inner to Page - 1
	        for (var i = this.state.page - this.props.innerPadding; i <= this.state.page - 1; i++) {
	          output.push(this.getLinkToPage(i));
	        }
	      } else {
	        // output 1 to Page - 1
	        for (var i = 1; i <= this.state.page - 1; i++) {
	          output.push(this.getLinkToPage(i));
	        }
	      }
	
	      // output page
	      output.push(this.getLinkToPage(this.state.page));
	
	      // if Page < Total - (Inner + Outer + 1)
	      if (this.state.page < this.props.pages - this.props.innerPadding - this.props.outerPadding - 1) {
	        // output Page + 1 to Page + Inner
	        for (var i = this.state.page + 1; i <= this.state.page + this.props.innerPadding; i++) {
	          output.push(this.getLinkToPage(i));
	        }
	        // output ...
	        output.push(this.getTruncator(2));
	        // output Total - (Outer - 1) to Total
	        for (var i = this.props.pages - (this.props.outerPadding - 1); i <= this.props.pages; i++) {
	          output.push(this.getLinkToPage(i));
	        }
	      } else {
	        // output Page + 1 to Total
	        for (var i = this.state.page + 1; i <= this.props.pages; i++) {
	          output.push(this.getLinkToPage(i));
	        }
	      }
	
	      return output;
	    }
	  }, {
	    key: 'getPreviousLink',
	    value: function getPreviousLink() {
	      return _react2.default.createElement(
	        'a',
	        { href: '#',
	          key: 'P',
	          className: (0, _classnames2.default)('paginatify__link', 'paginatify__link--previous', { 'paginatify__link--disabled': this.state.page === 1 }),
	          onClick: this.state.page !== 1 ? this.setPage.bind(this, this.state.page - 1, 'previous') : null },
	        this.props.prevLabel
	      );
	    }
	  }, {
	    key: 'getNextLink',
	    value: function getNextLink() {
	      return _react2.default.createElement(
	        'a',
	        { href: '#',
	          key: 'N',
	          className: (0, _classnames2.default)('paginatify__link', 'paginatify__link--next', { 'paginatify__link--disabled': this.state.page === this.props.pages }),
	          onClick: this.state.page !== this.props.pages ? this.setPage.bind(this, this.state.page + 1, 'next') : null },
	        this.props.nextLabel
	      );
	    }
	  }, {
	    key: 'getLinkToPage',
	    value: function getLinkToPage(toPage) {
	      return _react2.default.createElement(
	        'a',
	        { href: '#',
	          key: toPage,
	          className: (0, _classnames2.default)('paginatify__link', 'paginatify__link--page', { 'paginatify__link--current': this.state.page === toPage }),
	          onClick: toPage !== this.state.page ? this.setPage.bind(this, toPage, 'page') : null },
	        toPage
	      );
	    }
	  }, {
	    key: 'getTruncator',
	    value: function getTruncator(key) {
	      return _react2.default.createElement(
	        'span',
	        { className: 'paginatify__truncation',
	          key: 'T' + key },
	        this.props.truncateChar
	      );
	    }
	  }]);
	
	  return Paginatify;
	}(_react2.default.Component);
	
	Paginatify.propTypes = {
	  page: _react2.default.PropTypes.number.isRequired,
	  pages: _react2.default.PropTypes.number.isRequired,
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
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-paginatify.js.map