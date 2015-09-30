import React from 'react';
import cx from 'classnames';

let noop = function () {
  return undefined;
};

class Paginatify extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {page: props.page};
  }

  setPage(newPage, e) {
    console.log(newPage, e);

    e.preventDefault();
    let oldPage = this.state.page;
    this.setState({
      page: newPage
    });
    this.props.onChange(newPage, oldPage);
  }

  render() {
    return (
      <div className="paginatify">

        {
          this.state.pages > 1 ?
            this.getPreviousLink()
            : null
        }

        {this.getPageLinks()}

        {
          this.state.pages > 1 ?
            this.getNextLink()
            : null
        }

      </div>
    );

  }

  getPageLinks() {
    let output = [];

    if (this.props.pages < 1) {
      return output;
    }

    // if Total less than 2(Inner + Outer) + 5 AND NOT always truncate
    if (this.props.pages < 2 * (this.props.innerPadding + this.props.outerPadding) + 5 && !this.props.alwaysTruncate) {
      // output 1 to Total
      for (let i = 1; i <= this.props.pages; i++) {
        output.push(this.getLinkToPage(i));
      }
      return output;
    }

    // if Page > Inner + Outer + 2
    if (this.props.page > this.props.innerPadding + this.props.outerPadding + 2) {
      // output 1 to Outer
      for (let i = 1; i <= this.props.outerPadding; i++) {
        output.push(this.getLinkToPage(i));
      }
      // output ...
      output.push(this.getTruncator());
      // output Page - Inner to Page - 1
      for (let i = this.props.page - this.props.innerPadding; i <= this.props.page - 1; i++) {
        output.push(this.getLinkToPage(i));
      }
    } else {
      // output 1 to Page - 1
      for (let i = 1; i <= this.props.page - 1; i++) {
        output.push(this.getLinkToPage(i));
      }
    }

    // output page
    output.push(this.getLinkToPage(this.props.page));

    // if Page < Total - (Inner + Outer + 1)
    if (this.props.page < this.props.pages - this.props.innerPadding - this.props.outerPadding - 1) {
      // output Page + 1 to Page + Inner
      for (let i = this.props.page + 1; i <= this.props.page + this.props.innerPadding; i++) {
        output.push(this.getLinkToPage(i));
      }
      // output ...
      output.push(this.getTruncator());
      // output Total - (Outer - 1) to Total
      for (let i = this.props.pages - (this.props.outerPadding - 1); i <= this.props.pages; i++) {
        output.push(this.getLinkToPage(i));
      }
    } else {
      // output Page + 1 to Total
      for (let i = this.props.page + 1; i <= this.props.pages; i++) {
        output.push(this.getLinkToPage(i));
      }
    }

    return output;
  }


  getPreviousLink() {
    return <a href="#" key="previous"
              onClick={this.state.page !== 1 ? this.this.setPage.bind(this, this.state.page - 1) : noop}>
      {this.props.prevLabel}
    </a>;
  }

  getNextLink() {
    return <a href="#" key="next"
              onClick={this.state.page !== this.props.pages ? this.setPage.bind(this, this.state.page + 1) : noop}>
      {this.props.nextLabel}
    </a>;
  }

  getLinkToPage(toPage) {
    return toPage;

    //return <a href="#" key={toPage} onClick={toPage !== this.state.page ? this.setPage.bind(this, toPage) : noop}>
    //  {toPage}
    //</a>;
  }

  getTruncator() {
    return '…';
  }
}

Paginatify.propTypes = {
  page: React.PropTypes.number.required,
  pages: React.PropTypes.number.required,
  onChange: React.PropTypes.func,
  nextLabel: React.PropTypes.string,
  prevLabel: React.PropTypes.string
};

Paginatify.defaultProps = {
  page: 1,
  pages: 1,
  alwaysTruncate: true,
  innerPadding: 1,
  outerPadding: 1,
  onChange: noop,
  nextLabel: '>',
  prevLabel: '<'
};

export default Paginatify;
