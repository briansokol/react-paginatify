import React from 'react';

class Paginatify extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {page: props.page};
  }

  setPage(page) {
    this.setState({
      page: page
    });
  }

  render() {
    return (
      <div className="paginateify-component">
        <a href="#" onClick={this.setPage(this.state.page - 1)}>{this.props.prevLabel}</a>
        <a href="#" onClick={this.setPage(1)}>1</a>
        <a href="#" onClick={this.setPage(this.props.totalPages)}>{this.props.totalPages}</a>
        <a href="#" onClick={this.setPage(this.state.page + 1)}>{this.props.nextLabel}</a>
      </div>
    );
  }
}

Paginatify.propTypes = {
  page: React.PropTypes.number.required,
  totalPages: React.PropTypes.number.required,
  onNext: React.PropTypes.func.required,
  onPrev: React.PropTypes.func.required,
  onJump: React.PropTypes.func.required,
  nextLabel: React.PropTypes.string,
  prevLabel: React.PropTypes.string
};

Paginatify.defaultProps = {
  page: 1,
  totalPages: 1,
  onNext: function() {},
  onPrev: function() {},
  onJump: function() {},
  nextLabel: '>',
  prevLabel: '<'
};

export default Paginatify;