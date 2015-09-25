import React from 'react';

class Paginatify extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {page: props.page};
    this.getVisiblePageNumbers.bind(this);
  }

  setPage(newPage, e) {
    e.preventDefault();
    let oldPage = this.state.page;
    this.setState({
      page: newPage
    });
    this.props.onChange(newPage, oldPage);
  }

  render() {
    //return (
    //  <div className="paginatify-component">
    //    <a href="#" onClick={this.setPage(this.state.page - 1)}>{this.props.prevLabel}</a>
    //    <a href="#" onClick={this.setPage(1)}>1</a>
    //    <a href="#" onClick={this.setPage(this.props.totalPages)}>{this.props.totalPages}</a>
    //    <a href="#" onClick={this.setPage(this.state.page + 1)}>{this.props.nextLabel}</a>
    //  </div>
    //);
    return;
  }

  getVisiblePageNumbers() {
    if (this.props.totalPages === 0) {
      console.log([]);
      return [];
    } else if (this.props.totalPages === 1) {
      console.log([1]);
      return [1];
    } else if (this.props.totalPages <= 7) {
      console.log(this.range(1, this.props.totalPages));
      return this.range(1, this.props.totalPages);
    } else {
      var links = [];
      if (this.props.page <= 4) {
        links = this.range(1, this.props.page);
      } else {
        links = [1, 'br', this.props.page - 2, this.props.page - 1, this.props.page];
      }
      if (this.props.page < this.props.totalPages) {
        if (this.props.page >= this.props.totalPages - 3) {
          links.push(...this.range(this.props.page + 1, this.props.totalPages));
        } else {
          if (this.props.page + 1 < this.props.totalPages) {
            links.push(this.props.page + 1);
          }
          if (this.props.page + 2 < this.props.totalPages) {
            links.push(this.props.page + 2);
          }
          links.push('...');
          links.push(this.props.totalPages);
        }
      }
    }
    console.log(links);
    return links;
  }

  getPreviousLink() {
    return <a href="#" onClick={this.setPage(this.state.page - 1)}>{this.props.prevLabel}</a>;
  }

  getNextLink() {
    return <a href="#" onClick={this.setPage(this.state.page + 1)}>{this.props.nextLabel}</a>;
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
  onChange: function () {
  },
  nextLabel: '>',
  prevLabel: '<'
};

export default Paginatify;
