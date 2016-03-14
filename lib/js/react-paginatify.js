'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

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
        { className: (0, _classnames2.default)('paginatify', this.props.className),
          id: this.props.id },
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
        for (var _i = 1; _i <= this.props.outerPadding; _i++) {
          output.push(this.getLinkToPage(_i));
        }
        // output ...
        output.push(this.getTruncator(1));
        // output Page - Inner to Page - 1
        for (var _i2 = this.state.page - this.props.innerPadding; _i2 <= this.state.page - 1; _i2++) {
          output.push(this.getLinkToPage(_i2));
        }
      } else {
        // output 1 to Page - 1
        for (var _i3 = 1; _i3 <= this.state.page - 1; _i3++) {
          output.push(this.getLinkToPage(_i3));
        }
      }

      // output page
      output.push(this.getLinkToPage(this.state.page));

      // if Page < Total - (Inner + Outer + 1)
      if (this.state.page < this.props.pages - this.props.innerPadding - this.props.outerPadding - 1) {
        // output Page + 1 to Page + Inner
        for (var _i4 = this.state.page + 1; _i4 <= this.state.page + this.props.innerPadding; _i4++) {
          output.push(this.getLinkToPage(_i4));
        }
        // output ...
        output.push(this.getTruncator(2));
        // output Total - (Outer - 1) to Total
        for (var _i5 = this.props.pages - (this.props.outerPadding - 1); _i5 <= this.props.pages; _i5++) {
          output.push(this.getLinkToPage(_i5));
        }
      } else {
        // output Page + 1 to Total
        for (var _i6 = this.state.page + 1; _i6 <= this.props.pages; _i6++) {
          output.push(this.getLinkToPage(_i6));
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

module.exports = Paginatify;
//# sourceMappingURL=react-paginatify.js.map
