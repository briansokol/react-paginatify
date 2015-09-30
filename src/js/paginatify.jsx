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
    let pageNumbers = this.getVisiblePageNumbers();

    return (
      <div className="paginatify">
        {
          this.state.totalPages > 1 ?
            this.getPreviousLink()
            : null
        }
        {
          pageNumbers.map(i => {
            return this.getLink(i);
          })
        }
        {
          this.state.totalPages > 1 ?
            this.getNextLink()
            : null
        }
      </div>
    )

  }

  getVisiblePageNumbers() {
    if (this.props.totalPages <= 0) {
      return [];
    } else if (this.props.totalPages === 1) {
      return [1];
    } else if (this.props.totalPages <= 7) {
      return this.range(1, this.props.totalPages);
    } else {
      var links = [];
      if (this.state.page <= 4) {
        links = this.range(1, this.state.page);
      } else {
        links = [1, '...', this.state.page - 2, this.state.page - 1, this.state.page];
      }
      if (this.state.page < this.props.totalPages) {
        if (this.state.page >= this.props.totalPages - 3) {
          links.push(...this.range(this.state.page + 1, this.props.totalPages));
        } else {
          if (this.state.page + 1 < this.props.totalPages) {
            links.push(this.state.page + 1);
          }
          if (this.state.page + 2 < this.props.totalPages) {
            links.push(this.state.page + 2);
          }
          links.push('...');
          links.push(this.props.totalPages);
        }
      }
    }
    return links;
  }

  getPreviousLink() {
    return <a href="#" key="previous"
              onClick={this.state.page !== 1 ? this.this.setPage.bind(this, this.state.page - 1) : noop}>
      {this.props.prevLabel}
    </a>;
  }

  getNextLink() {
    return <a href="#" key="next"
              onClick={this.state.page !== this.props.totalPages ? this.setPage.bind(this, this.state.page + 1) : noop}>
      {this.props.nextLabel}
    </a>;
  }

  getLink(toPage) {
    return <a href="#" key={toPage} onClick={toPage !== this.state.page ? this.setPage.bind(this, toPage) : noop}>
      {toPage}
    </a>;
  }

  range(start, end) {
    if (start > end) {
      [start, end] = [end, start];
    }
    return Array(end - start + 1).fill(0).map((v, i) => i + start);
  }
}

Paginatify.propTypes = {
  page: React.PropTypes.number.required,
  totalPages: React.PropTypes.number.required,
  onChange: React.PropTypes.func,
  nextLabel: React.PropTypes.string,
  prevLabel: React.PropTypes.string
};

Paginatify.defaultProps = {
  page: 1,
  totalPages: 1,
  onChange: noop,
  nextLabel: '>',
  prevLabel: '<'
};

export default Paginatify;
