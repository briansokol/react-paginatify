import React from 'react';

class Paginatify extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {page: props.page};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.state.page) {
      this.setState({
        page: nextProps.page
      });
    }
  }

  render() {
    return (
      <div className="paginatify">

        {
          this.props.pages > 1 ?
            this.getPreviousLink()
            : null
        }

        {
          this.getPageLinks()
        }

        {
          this.props.pages > 1 ?
            this.getNextLink()
            : null
        }

      </div>
    );

  }

  setPage(newPage, button, e) {
    e.preventDefault();
    let oldPage = this.state.page;
    this.setState({
      page: newPage
    });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newPage, oldPage, button);
    }
  }

  getPageLinks() {
    let output = [];

    if (this.props.pages < 1) {
      return output;
    }

    // if Total less than 2(Inner + Outer) + 5 AND NOT truncate short
    if (this.props.truncateNever || (this.props.pages < 2 * (this.props.innerPadding + this.props.outerPadding) + 5 && !this.props.truncateShort)) {
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
    return <a href="#"
              key="P"
              className={'paginatify__link--previous ' + (this.state.page !== 1 ? 'paginatify__link' : 'paginatify__link--disabled')}
              onClick={this.state.page !== 1 ? this.setPage.bind(this, this.state.page - 1, 'previous') : null}>
      {this.props.prevLabel}
    </a>;
  }

  getNextLink() {
    return <a href="#"
              key="N"
              className={'paginatify__link--next ' + (this.state.page !== this.props.pages ? 'paginatify__link' : 'paginatify__link--disabled')}
              onClick={this.state.page !== this.props.pages ? this.setPage.bind(this, this.state.page + 1, 'next') : null}>
      {this.props.nextLabel}
    </a>;
  }

  getLinkToPage(toPage) {
    if (this.props.rawOutput) {
      return toPage;
    } else {
      return <a href="#"
                key={toPage}
                className={'paginatify__link--page ' + (this.state.page === toPage ? 'paginatify__link--current' : 'paginatify__link')}
                onClick={toPage !== this.state.page ? this.setPage.bind(this, toPage, 'page') : null}>
        {toPage}
      </a>;
    }
  }

  getTruncator(key) {
    if (this.props.rawOutput) {
      return this.props.truncateChar;
    } else {
      return <span className="paginatify__truncation"
                   key={'T' + key}>
        {this.props.truncateChar}
      </span>
    }
  }
}

Paginatify.propTypes = {
  page: React.PropTypes.number.isRequired,
  pages: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func,
  innerPadding: React.PropTypes.number,
  outerPadding: React.PropTypes.number,
  nextLabel: React.PropTypes.string,
  prevLabel: React.PropTypes.string,
  truncateChar: React.PropTypes.string,
  truncateShort: React.PropTypes.bool,
  truncateNever: React.PropTypes.bool,
  rawOutput: React.PropTypes.bool
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

export default Paginatify;
