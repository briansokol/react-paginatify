import React from 'react';
import cx from 'classnames';

class Paginatify extends React.Component {

  static propTypes = {
    page: React.PropTypes.number.isRequired,
    pages: React.PropTypes.number.isRequired,
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    onChange: React.PropTypes.func,
    innerPadding: React.PropTypes.number,
    outerPadding: React.PropTypes.number,
    nextLabel: React.PropTypes.string,
    prevLabel: React.PropTypes.string,
    truncateChar: React.PropTypes.string,
    truncateShort: React.PropTypes.bool,
    truncateNever: React.PropTypes.bool
  };

  static defaultProps = {
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

  state = {
    page: this.props.page
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.state.page) {
      this.setState({
        page: nextProps.page
      });
    }
  }

  setPage(newPage, button, e) {
    e.preventDefault();
    const oldPage = this.state.page;
    this.setState({
      page: newPage
    });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newPage, oldPage, button);
    }
  }

  getPageLinks() {
    const output = [];

    if (this.props.pages < 1) {
      return output;
    }

    // if Total less than 2(Inner + Outer) + 5 AND NOT truncate short
    if (this.props.truncateNever ||
        (this.props.pages < 2 * (this.props.innerPadding + this.props.outerPadding) + 5 && !this.props.truncateShort)) {
      // output 1 to Total
      for (let i = 1; i <= this.props.pages; i++) {
        output.push(this.getLinkToPage(i));
      }
      return output;
    }

    // if Page > Inner + Outer + 2
    if (this.state.page > this.props.innerPadding + this.props.outerPadding + 2) {
      // output 1 to Outer
      for (let i = 1; i <= this.props.outerPadding; i++) {
        output.push(this.getLinkToPage(i));
      }
      // output ...
      output.push(this.getTruncator(1));
      // output Page - Inner to Page - 1
      for (let i = this.state.page - this.props.innerPadding; i <= this.state.page - 1; i++) {
        output.push(this.getLinkToPage(i));
      }
    } else {
      // output 1 to Page - 1
      for (let i = 1; i <= this.state.page - 1; i++) {
        output.push(this.getLinkToPage(i));
      }
    }

    // output page
    output.push(this.getLinkToPage(this.state.page));

    // if Page < Total - (Inner + Outer + 1)
    if (this.state.page < this.props.pages - this.props.innerPadding - this.props.outerPadding - 1) {
      // output Page + 1 to Page + Inner
      for (let i = this.state.page + 1; i <= this.state.page + this.props.innerPadding; i++) {
        output.push(this.getLinkToPage(i));
      }
      // output ...
      output.push(this.getTruncator(2));
      // output Total - (Outer - 1) to Total
      for (let i = this.props.pages - (this.props.outerPadding - 1); i <= this.props.pages; i++) {
        output.push(this.getLinkToPage(i));
      }
    } else {
      // output Page + 1 to Total
      for (let i = this.state.page + 1; i <= this.props.pages; i++) {
        output.push(this.getLinkToPage(i));
      }
    }

    return output;
  }


  getPreviousLink() {
    return (
      <a
        href="#"
        key="P"
        className={cx('paginatify__link', 'paginatify__link--previous', { 'paginatify__link--disabled': this.state.page === 1 })}
        onClick={this.state.page !== 1 ? this.setPage.bind(this, this.state.page - 1, 'previous') : null}>
        {this.props.prevLabel}
      </a>
    );
  }

  getNextLink() {
    return (
      <a
        href="#"
        key="N"
        className={cx('paginatify__link', 'paginatify__link--next', { 'paginatify__link--disabled': this.state.page === this.props.pages })}
        onClick={this.state.page !== this.props.pages ? this.setPage.bind(this, this.state.page + 1, 'next') : null}>
        {this.props.nextLabel}
      </a>
    );
  }

  getLinkToPage(toPage) {
    return (
      <a
        href="#"
        key={toPage}
        className={cx('paginatify__link', 'paginatify__link--page', { 'paginatify__link--current': this.state.page === toPage })}
        onClick={toPage !== this.state.page ? this.setPage.bind(this, toPage, 'page') : null}>
        {toPage}
      </a>
    );
  }

  getTruncator(key) {
    return (
      <span
        className="paginatify__truncation"
        key={`T${key}`}>
        {this.props.truncateChar}
      </span>
    );
  }

  render() {
    return (
      <div
        className={cx('paginatify', this.props.className)}
        id={this.props.id}>

        {
          this.props.pages > 1
            ? this.getPreviousLink()
            : null
        }

        {
          this.getPageLinks()
        }

        {
          this.props.pages > 1
            ? this.getNextLink()
            : null
        }

      </div>
    );
  }
}

module.exports = Paginatify;
