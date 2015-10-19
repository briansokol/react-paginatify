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
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Paginatify = (function (_React$Component) {
	  _inherits(Paginatify, _React$Component);
	
	  function Paginatify(props) {
	    _classCallCheck(this, Paginatify);
	
	    _get(Object.getPrototypeOf(Paginatify.prototype), 'constructor', this).call(this, props);
	    this.props = props;
	    this.state = { page: props.page };
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
	      return _react2['default'].createElement(
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
	      return _react2['default'].createElement(
	        'a',
	        { href: '#',
	          key: 'P',
	          className: 'paginatify__link--previous ' + (this.state.page !== 1 ? 'paginatify__link' : 'paginatify__link--disabled'),
	          onClick: this.state.page !== 1 ? this.setPage.bind(this, this.state.page - 1, 'previous') : null },
	        this.props.prevLabel
	      );
	    }
	  }, {
	    key: 'getNextLink',
	    value: function getNextLink() {
	      return _react2['default'].createElement(
	        'a',
	        { href: '#',
	          key: 'N',
	          className: 'paginatify__link--next ' + (this.state.page !== this.props.pages ? 'paginatify__link' : 'paginatify__link--disabled'),
	          onClick: this.state.page !== this.props.pages ? this.setPage.bind(this, this.state.page + 1, 'next') : null },
	        this.props.nextLabel
	      );
	    }
	  }, {
	    key: 'getLinkToPage',
	    value: function getLinkToPage(toPage) {
	      if (this.props.rawOutput) {
	        return toPage;
	      } else {
	        return _react2['default'].createElement(
	          'a',
	          { href: '#',
	            key: toPage,
	            className: 'paginatify__link--page ' + (this.state.page === toPage ? 'paginatify__link--current' : 'paginatify__link'),
	            onClick: toPage !== this.state.page ? this.setPage.bind(this, toPage, 'page') : null },
	          toPage
	        );
	      }
	    }
	  }, {
	    key: 'getTruncator',
	    value: function getTruncator(key) {
	      if (this.props.rawOutput) {
	        return this.props.truncateChar;
	      } else {
	        return _react2['default'].createElement(
	          'span',
	          { className: 'paginatify__truncation',
	            key: 'T' + key },
	          this.props.truncateChar
	        );
	      }
	    }
	  }]);
	
	  return Paginatify;
	})(_react2['default'].Component);
	
	Paginatify.propTypes = {
	  page: _react2['default'].PropTypes.number.isRequired,
	  pages: _react2['default'].PropTypes.number.isRequired,
	  onChange: _react2['default'].PropTypes.func,
	  innerPadding: _react2['default'].PropTypes.number,
	  outerPadding: _react2['default'].PropTypes.number,
	  nextLabel: _react2['default'].PropTypes.string,
	  prevLabel: _react2['default'].PropTypes.string,
	  truncateChar: _react2['default'].PropTypes.string,
	  truncateShort: _react2['default'].PropTypes.bool,
	  truncateNever: _react2['default'].PropTypes.bool,
	  rawOutput: _react2['default'].PropTypes.bool
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
	  truncateNever: false,
	  rawOutput: false
	};
	
	exports['default'] = Paginatify;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlYjI2NmI0NWJkMmQ3MTA5MDg2OCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnaW5hdGlmeS5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0N0Q2tCLENBQU87Ozs7S0FFbkIsVUFBVTthQUFWLFVBQVU7O0FBRUgsWUFGUCxVQUFVLENBRUYsS0FBSyxFQUFFOzJCQUZmLFVBQVU7O0FBR1osZ0NBSEUsVUFBVSw2Q0FHTixLQUFLLEVBQUU7QUFDYixTQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixTQUFJLENBQUMsS0FBSyxHQUFHLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQztJQUNqQzs7Z0JBTkcsVUFBVTs7WUFRVyxtQ0FBQyxTQUFTLEVBQUU7QUFDbkMsV0FBSSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ3RDLGFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixlQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7VUFDckIsQ0FBQyxDQUFDO1FBQ0o7TUFDRjs7O1lBRUssa0JBQUc7QUFDUCxjQUNFOztXQUFLLFNBQVMsRUFBQyxZQUFZO1NBR3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsR0FDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUNwQixJQUFJO1NBSVIsSUFBSSxDQUFDLFlBQVksRUFBRTtTQUluQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FDaEIsSUFBSTtRQUdOLENBQ047TUFFSDs7O1lBRU0saUJBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7QUFDMUIsUUFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLFdBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQzlCLFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixhQUFJLEVBQUUsT0FBTztRQUNkLENBQUMsQ0FBQztBQUNILFdBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7QUFDN0MsYUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQztNQUNGOzs7WUFFVyx3QkFBRztBQUNiLFdBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7QUFFaEIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7QUFDeEIsZ0JBQU8sTUFBTSxDQUFDO1FBQ2Y7OztBQUdELFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFjLEVBQUU7O0FBRTdJLGNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQyxpQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDcEM7QUFDRCxnQkFBTyxNQUFNLENBQUM7UUFDZjs7O0FBR0QsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7O0FBRTNFLGNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNqRCxpQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDcEM7O0FBRUQsZUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWxDLGNBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyRixpQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDcEM7UUFDRixNQUFNOztBQUVMLGNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsaUJBQU0sQ0FBQyxJQUFJLENB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QVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxZQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDakMsZUFBWSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ3BDLGdCQUFhLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDbkMsZ0JBQWEsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNuQyxZQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7RUFDaEMsQ0FBQzs7QUFFRixXQUFVLENBQUMsWUFBWSxHQUFHO0FBQ3hCLE9BQUksRUFBRSxDQUFDO0FBQ1AsUUFBSyxFQUFFLENBQUM7QUFDUixXQUFRLEVBQUUsSUFBSTtBQUNkLGVBQVksRUFBRSxDQUFDO0FBQ2YsZUFBWSxFQUFFLENBQUM7QUFDZixZQUFTLEVBQUUsR0FBRztBQUNkLFlBQVMsRUFBRSxHQUFHO0FBQ2QsZUFBWSxFQUFFLEdBQUc7QUFDakIsZ0JBQWEsRUFBRSxLQUFLO0FBQ3BCLGdCQUFhLEVBQUUsS0FBSztBQUNwQixZQUFTLEVBQUUsS0FBSztFQUNqQixDQUFDOztzQkFFYSxVQUFVOzs7Ozs7O0FDMUx6QixnRCIsImZpbGUiOiJyZWFjdC1wYWdpbmF0aWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhY3QtcGFnaW5hdGlmeVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC1wYWdpbmF0aWZ5XCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGViMjY2YjQ1YmQyZDcxMDkwODY4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUGFnaW5hdGlmeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7cGFnZTogcHJvcHMucGFnZX07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMucGFnZSAhPT0gdGhpcy5zdGF0ZS5wYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGFnZTogbmV4dFByb3BzLnBhZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aWZ5XCI+XG5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMucGFnZXMgPiAxID9cbiAgICAgICAgICAgIHRoaXMuZ2V0UHJldmlvdXNMaW5rKClcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuZ2V0UGFnZUxpbmtzKClcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnBhZ2VzID4gMSA/XG4gICAgICAgICAgICB0aGlzLmdldE5leHRMaW5rKClcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgfVxuXG4gIHNldFBhZ2UobmV3UGFnZSwgYnV0dG9uLCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBvbGRQYWdlID0gdGhpcy5zdGF0ZS5wYWdlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFnZTogbmV3UGFnZVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdQYWdlLCBvbGRQYWdlLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGdldFBhZ2VMaW5rcygpIHtcbiAgICBsZXQgb3V0cHV0ID0gW107XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wYWdlcyA8IDEpIHtcbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgLy8gaWYgVG90YWwgbGVzcyB0aGFuIDIoSW5uZXIgKyBPdXRlcikgKyA1IEFORCBOT1QgdHJ1bmNhdGUgc2hvcnRcbiAgICBpZiAodGhpcy5wcm9wcy50cnVuY2F0ZU5ldmVyIHx8ICh0aGlzLnByb3BzLnBhZ2VzIDwgMiAqICh0aGlzLnByb3BzLmlubmVyUGFkZGluZyArIHRoaXMucHJvcHMub3V0ZXJQYWRkaW5nKSArIDUgJiYgIXRoaXMucHJvcHMudHJ1bmNhdGVTaG9ydCkpIHtcbiAgICAgIC8vIG91dHB1dCAxIHRvIFRvdGFsXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnByb3BzLnBhZ2VzOyBpKyspIHtcbiAgICAgICAgb3V0cHV0LnB1c2godGhpcy5nZXRMaW5rVG9QYWdlKGkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgLy8gaWYgUGFnZSA+IElubmVyICsgT3V0ZXIgKyAyXG4gICAgaWYgKHRoaXMuc3RhdGUucGFnZSA+IHRoaXMucHJvcHMuaW5uZXJQYWRkaW5nICsgdGhpcy5wcm9wcy5vdXRlclBhZGRpbmcgKyAyKSB7XG4gICAgICAvLyBvdXRwdXQgMSB0byBPdXRlclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5wcm9wcy5vdXRlclBhZGRpbmc7IGkrKykge1xuICAgICAgICBvdXRwdXQucHVzaCh0aGlzLmdldExpbmtUb1BhZ2UoaSkpO1xuICAgICAgfVxuICAgICAgLy8gb3V0cHV0IC4uLlxuICAgICAgb3V0cHV0LnB1c2godGhpcy5nZXRUcnVuY2F0b3IoMSkpO1xuICAgICAgLy8gb3V0cHV0IFBhZ2UgLSBJbm5lciB0byBQYWdlIC0gMVxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc3RhdGUucGFnZSAtIHRoaXMucHJvcHMuaW5uZXJQYWRkaW5nOyBpIDw9IHRoaXMuc3RhdGUucGFnZSAtIDE7IGkrKykge1xuICAgICAgICBvdXRwdXQucHVzaCh0aGlzLmdldExpbmtUb1BhZ2UoaSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdXRwdXQgMSB0byBQYWdlIC0gMVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5zdGF0ZS5wYWdlIC0gMTsgaSsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZ2V0TGlua1RvUGFnZShpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gb3V0cHV0IHBhZ2VcbiAgICBvdXRwdXQucHVzaCh0aGlzLmdldExpbmtUb1BhZ2UodGhpcy5zdGF0ZS5wYWdlKSk7XG5cbiAgICAvLyBpZiBQYWdlIDwgVG90YWwgLSAoSW5uZXIgKyBPdXRlciArIDEpXG4gICAgaWYgKHRoaXMuc3RhdGUucGFnZSA8IHRoaXMucHJvcHMucGFnZXMgLSB0aGlzLnByb3BzLmlubmVyUGFkZGluZyAtIHRoaXMucHJvcHMub3V0ZXJQYWRkaW5nIC0gMSkge1xuICAgICAgLy8gb3V0cHV0IFBhZ2UgKyAxIHRvIFBhZ2UgKyBJbm5lclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc3RhdGUucGFnZSArIDE7IGkgPD0gdGhpcy5zdGF0ZS5wYWdlICsgdGhpcy5wcm9wcy5pbm5lclBhZGRpbmc7IGkrKykge1xuICAgICAgICBvdXRwdXQucHVzaCh0aGlzLmdldExpbmtUb1BhZ2UoaSkpO1xuICAgICAgfVxuICAgICAgLy8gb3V0cHV0IC4uLlxuICAgICAgb3V0cHV0LnB1c2godGhpcy5nZXRUcnVuY2F0b3IoMikpO1xuICAgICAgLy8gb3V0cHV0IFRvdGFsIC0gKE91dGVyIC0gMSkgdG8gVG90YWxcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLnByb3BzLnBhZ2VzIC0gKHRoaXMucHJvcHMub3V0ZXJQYWRkaW5nIC0gMSk7IGkgPD0gdGhpcy5wcm9wcy5wYWdlczsgaSsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZ2V0TGlua1RvUGFnZShpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG91dHB1dCBQYWdlICsgMSB0byBUb3RhbFxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc3RhdGUucGFnZSArIDE7IGkgPD0gdGhpcy5wcm9wcy5wYWdlczsgaSsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZ2V0TGlua1RvUGFnZShpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG5cbiAgZ2V0UHJldmlvdXNMaW5rKCkge1xuICAgIHJldHVybiA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIGtleT1cIlBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9eydwYWdpbmF0aWZ5X19saW5rLS1wcmV2aW91cyAnICsgKHRoaXMuc3RhdGUucGFnZSAhPT0gMSA/ICdwYWdpbmF0aWZ5X19saW5rJyA6ICdwYWdpbmF0aWZ5X19saW5rLS1kaXNhYmxlZCcpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLnBhZ2UgIT09IDEgPyB0aGlzLnNldFBhZ2UuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBhZ2UgLSAxLCAncHJldmlvdXMnKSA6IG51bGx9PlxuICAgICAge3RoaXMucHJvcHMucHJldkxhYmVsfVxuICAgIDwvYT47XG4gIH1cblxuICBnZXROZXh0TGluaygpIHtcbiAgICByZXR1cm4gPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBrZXk9XCJOXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsncGFnaW5hdGlmeV9fbGluay0tbmV4dCAnICsgKHRoaXMuc3RhdGUucGFnZSAhPT0gdGhpcy5wcm9wcy5wYWdlcyA/ICdwYWdpbmF0aWZ5X19saW5rJyA6ICdwYWdpbmF0aWZ5X19saW5rLS1kaXNhYmxlZCcpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLnBhZ2UgIT09IHRoaXMucHJvcHMucGFnZXMgPyB0aGlzLnNldFBhZ2UuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBhZ2UgKyAxLCAnbmV4dCcpIDogbnVsbH0+XG4gICAgICB7dGhpcy5wcm9wcy5uZXh0TGFiZWx9XG4gICAgPC9hPjtcbiAgfVxuXG4gIGdldExpbmtUb1BhZ2UodG9QYWdlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucmF3T3V0cHV0KSB7XG4gICAgICByZXR1cm4gdG9QYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGtleT17dG9QYWdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3BhZ2luYXRpZnlfX2xpbmstLXBhZ2UgJyArICh0aGlzLnN0YXRlLnBhZ2UgPT09IHRvUGFnZSA/ICdwYWdpbmF0aWZ5X19saW5rLS1jdXJyZW50JyA6ICdwYWdpbmF0aWZ5X19saW5rJyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9QYWdlICE9PSB0aGlzLnN0YXRlLnBhZ2UgPyB0aGlzLnNldFBhZ2UuYmluZCh0aGlzLCB0b1BhZ2UsICdwYWdlJykgOiBudWxsfT5cbiAgICAgICAge3RvUGFnZX1cbiAgICAgIDwvYT47XG4gICAgfVxuICB9XG5cbiAgZ2V0VHJ1bmNhdG9yKGtleSkge1xuICAgIGlmICh0aGlzLnByb3BzLnJhd091dHB1dCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudHJ1bmNhdGVDaGFyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwicGFnaW5hdGlmeV9fdHJ1bmNhdGlvblwiXG4gICAgICAgICAgICAgICAgICAga2V5PXsnVCcgKyBrZXl9PlxuICAgICAgICB7dGhpcy5wcm9wcy50cnVuY2F0ZUNoYXJ9XG4gICAgICA8L3NwYW4+XG4gICAgfVxuICB9XG59XG5cblBhZ2luYXRpZnkucHJvcFR5cGVzID0ge1xuICBwYWdlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHBhZ2VzOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgaW5uZXJQYWRkaW5nOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBvdXRlclBhZGRpbmc6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG5leHRMYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJldkxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB0cnVuY2F0ZUNoYXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHRydW5jYXRlU2hvcnQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICB0cnVuY2F0ZU5ldmVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgcmF3T3V0cHV0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuUGFnaW5hdGlmeS5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhZ2U6IDEsXG4gIHBhZ2VzOiAxLFxuICBvbkNoYW5nZTogbnVsbCxcbiAgaW5uZXJQYWRkaW5nOiAxLFxuICBvdXRlclBhZGRpbmc6IDEsXG4gIG5leHRMYWJlbDogJz4nLFxuICBwcmV2TGFiZWw6ICc8JyxcbiAgdHJ1bmNhdGVDaGFyOiAn4oCmJyxcbiAgdHJ1bmNhdGVTaG9ydDogZmFsc2UsXG4gIHRydW5jYXRlTmV2ZXI6IGZhbHNlLFxuICByYXdPdXRwdXQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aWZ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvcGFnaW5hdGlmeS5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=