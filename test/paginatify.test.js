jest.dontMock('../src/js/paginatify');
jest.dontMock('classnames');

import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Paginatify = require('../src/js/paginatify');

describe('Paginatify', function() {

  describe('In general', function() {

    let paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={1} pages={5} />
    );

    it('should render a paginatify component', function() {
      expect(ReactDOM.findDOMNode(paginatify)).not.toBeNull();
    });

    it('should should contain at least one page link', function() {
      let links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--page');
      expect(links.length).toBeGreaterThan(0);
    });

  });

  describe('With one page', function() {

    let paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={1} pages={1} />
    );

    it('should should contain only one page link', function() {
      let links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--page');
      expect(links.length).toBe(1);
    });

    it('should should contain no previous link', function() {
      let links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--previous');
      expect(links.length).toBe(0);
    });

    it('should should contain no next link', function() {
      let links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--next');
      expect(links.length).toBe(0);
    });

  });

  describe('With more than one page', function() {

    let paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={1} pages={2} />
    );

    it('should should contain only one page link', function() {
      let links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--page');
      expect(links.length).toBe(2);
    });

    it('should should contain a previous link', function() {
      let links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--previous');
      expect(links.length).toBe(1);
    });

    it('should should contain a next link', function() {
      let links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--next');
      expect(links.length).toBe(1);
    });

  });

  describe('Given props', function() {

    let tests = [
      {
        props: {page: 1, pages: 0},
        expect: []
      },
      {
        props: {page: 1, pages: -1},
        expect: []
      }, {
        props: {page: 1, pages: 1},
        expect: ['1']
      },
      {
        props: {page: 1, pages: 7},
        expect: ['<', '1', '2', '3', '4', '5', '6', '7', '>']
      },
      {
        props: {page: 1, pages: 7, truncateShort: true},
        expect: ['<', '1', '2', '…', '7', '>']
      },
      {
        props: {page: 3, pages: 10},
        expect: ['<', '1', '2', '3', '4', '…', '10', '>']
      },
      {
        props: {page: 8, pages: 10},
        expect: ['<', '1', '…', '7', '8', '9', '10', '>']
      },
      {
        props: {page: 6, pages: 10},
        expect: ['<', '1', '…', '5', '6', '7', '…', '10', '>']
      }
    ];

    tests.forEach(function(test) {
      describe(JSON.stringify(test.props), function() {
        let paginatify = TestUtils.renderIntoDocument(
          <Paginatify {...test.props} />
        );

        it('should produce pagination like ' + JSON.stringify(test.expect), function() {
          let links = ReactDOM.findDOMNode(paginatify).children;
          let output = [];
          test.expect.forEach(function(value, idx) {
            output.push(links[idx].textContent);
            expect(links[idx].textContent).toEqual(value);
          });
          //console.log(JSON.stringify(test.props), JSON.stringify(test.expect), JSON.stringify(output));
        });
      });
    });
  });

});