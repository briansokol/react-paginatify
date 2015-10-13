jest.dontMock('../src/js/paginatify.jsx');

describe('paginatify', function () {

  var React = require('react');
  var TestUtils = require('react-addons-test-utils');
  var Paginatify = require('../src/js/paginatify');

  var paginatify = TestUtils.renderIntoDocument(
    <Paginatify page={1} pages={5}/>
  );

  it('should render pagination', function() {
    var component = TestUtils.findRenderedDOMComponentWithClass(paginatify, 'paginatify');
    expect(component).not.toBeNull();
  });

  //describe('getPageLinks with innerPadding: 1, outerPadding: 1', function () {
  //
  //  var defaultProps       = Paginatify.defaultProps;
  //  defaultProps.rawOutput = true;
  //
  //  var tests = [
  //    {
  //      props: Object.assign({}, defaultProps, {page: 1, pages: 0}),
  //      expected: []
  //    },
  //    {
  //      props: Object.assign({}, defaultProps, {page: 1, pages: -1}),
  //      expected: []
  //    }, {
  //      props: Object.assign({}, defaultProps, {page: 1, pages: 1}),
  //      expected: [1]
  //    },
  //    {
  //      props: Object.assign({}, defaultProps, {page: 1, pages: 7}),
  //      expected: [1, 2, '…', 7]
  //    },
  //    {
  //      props: Object.assign({}, defaultProps, {page: 3, pages: 10}),
  //      expected: [1, 2, 3, 4, '…', 10]
  //    },
  //    {
  //      props: Object.assign({}, defaultProps, {page: 8, pages: 10}),
  //      expected: [1, '…', 7, 8, 9, 10]
  //    },
  //    {
  //      props: Object.assign({}, defaultProps, {page: 6, pages: 10}),
  //      expected: [1, '…', 5, 6, 7, '…', 10]
  //    }
  //  ];
  //
  //  tests.forEach(function (test) {
  //    it('produces pagination for page: ' + test.props.page + ', pages: ' + test.props.pages, function () {
  //      let paginatify = new Paginatify(test.props);
  //      expect(paginatify.getPageLinks()).to.eql(test.expected);
  //    });
  //  });
  //});

  //let options = {
  //  page: 9,
  //  pages: 10,
  //  alwaysTruncate: false,
  //  innerPadding: 1,
  //  outerPadding: 2
  //};
  //let paginatify = new Paginatify(options);
  //console.log(options);
  //console.log(paginatify.getPageLinks());

});