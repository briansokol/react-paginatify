jest.dontMock('../src/js/paginatify');
jest.dontMock('classnames');

import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Paginatify = require('../src/js/paginatify');

describe('Paginatify', function() {

  describe('In general', function() {

    const paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={1} pages={5}/>
    );

    it('should render a paginatify component', function() {
      expect(ReactDOM.findDOMNode(paginatify)).not.toBeNull();
    });

    it('should should contain at least one page link', function() {
      const links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--page');
      expect(links.length).toBeGreaterThan(0);
    });

  });

  describe('With one page', function() {

    const paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={1} pages={1}/>
    );

    it('should should contain only one page link', function() {
      const links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--page');
      expect(links.length).toBe(1);
    });

    it('should should contain no previous link', function() {
      const links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--previous');
      expect(links.length).toBe(0);
    });

    it('should should contain no next link', function() {
      const links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--next');
      expect(links.length).toBe(0);
    });

  });

  describe('With more than one page', function() {

    const paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={1} pages={2}/>
    );

    it('should should contain only one page link', function() {
      const links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--page');
      expect(links.length).toBe(2);
    });

    it('should should contain a previous link', function() {
      const links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--previous');
      expect(links.length).toBe(1);
    });

    it('should should contain a next link', function() {
      const links = TestUtils.scryRenderedDOMComponentsWithClass(paginatify, 'paginatify__link--next');
      expect(links.length).toBe(1);
    });

  });

  describe('Given props', function() {

    const tests = [
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
        const paginatify = TestUtils.renderIntoDocument(
          <Paginatify {...test.props} />
        );

        it('should produce pagination like ' + JSON.stringify(test.expect), function() {
          const links  = ReactDOM.findDOMNode(paginatify).children;
          const output = [];
          test.expect.forEach(function(value, idx) {
            output.push(links[idx].textContent);
            expect(links[idx].textContent).toEqual(value);
          });
        });
      });
    });
  });

  describe('When clicking next', function() {

    const paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={1} pages={5}/>
    );

    it('should make the second page active', function() {
      const pagination = ReactDOM.findDOMNode(paginatify);
      TestUtils.Simulate.click(pagination.querySelector('.paginatify__link--next'));
      expect(pagination.children[2].classList.contains('paginatify__link--current')).toBeTruthy();
    });
  });

  describe('When clicking previous', function() {

    const paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={5} pages={5}/>
    );

    it('should make the second to last page active', function() {
      const pagination = ReactDOM.findDOMNode(paginatify);
      TestUtils.Simulate.click(pagination.querySelector('.paginatify__link--previous'));
      expect(pagination.children[4].classList.contains('paginatify__link--current')).toBeTruthy();
    });
  });

  describe('When clicking a specific page', function() {

    const paginatify = TestUtils.renderIntoDocument(
      <Paginatify page={5} pages={5}/>
    );

    it('should make that page active', function() {
      const pagination = ReactDOM.findDOMNode(paginatify);
      TestUtils.Simulate.click(pagination.querySelector('.paginatify__link--page'));
      expect(pagination.children[1].classList.contains('paginatify__link--current')).toBeTruthy();
    });
  });

});