jest.dontMock('../src/js/paginatify.jsx');

var TestUtils  = require('react-addons-test-utils'),
    ReactDOM   = require('react-dom'),
    React      = require('react'),
    Paginatify = require('../src/js/paginatify');

describe('paginatify', function() {

  describe('in general', function() {

    var paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={1} pages={5} />
    );

    it('should render a paginatify component', function() {
      var component = TestUtils.findRenderedDOMComponentWithClass(paginatify, 'paginatify');
      expect(ReactDOM.findDOMNode(component)).not.toBeNull();
    });

    it('should should contain at least one page link', function() {
      var links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--page');
      expect(links.length).toBeGreaterThan(0);
    });

  });

  describe('with one page', function() {

    var paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={1} pages={1} />
    );

    it('should should contain only one page link', function() {
      var links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--page');
      expect(links.length).toBe(1);
    });

    it('should should contain no previous link', function() {
      var links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--previous');
      expect(links.length).toBe(0);
    });

    it('should should contain no next link', function() {
      var links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--next');
      expect(links.length).toBe(0);
    });

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