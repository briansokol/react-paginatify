import React from 'react/addons';
import {expect} from 'chai';
import Paginatify from '../src/js/paginatify';

describe('paginatify', function () {

  describe('getPageLinks', function () {

    it('should return an empty array given 0 pages', function () {
      let props = Object.assign(Paginatify.defaultProps, {page: 1, pages: 0, rawOutput: true});
      let paginatify = new Paginatify(props);
      expect(paginatify.getPageLinks()).to.eql([]);
    });

    it('should return an empty array given negative pages', function () {
      let props = Object.assign(Paginatify.defaultProps, {page: 1, pages: -1, rawOutput: true});
      let paginatify = new Paginatify(props);
      expect(paginatify.getPageLinks()).to.eql([]);
    });

    it('should return an array of 1 given 1 page', function () {
      let props = Object.assign(Paginatify.defaultProps, {page: 1, pages: 1, rawOutput: true});
      let paginatify = new Paginatify(props);
      expect(paginatify.getPageLinks()).to.eql([1]);
    });

    it('should return an array of numbers given less than 8 pages', function () {
      let props = Object.assign(Paginatify.defaultProps, {page: 1, pages: 7, rawOutput: true});
      let paginatify = new Paginatify(props);
      expect(paginatify.getPageLinks()).to.eql([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should return an array of numbers given more than 7 pages with a truncation before the end if the page is less than 5', function () {
      let props = Object.assign(Paginatify.defaultProps, {page: 3, pages: 10, rawOutput: true});
      let paginatify = new Paginatify(props);
      expect(paginatify.getPageLinks()).to.eql([1, 2, 3, 4, 5, '…', 10]);
    });

    it('should return an array of numbers given more than 7 pages with a truncation after 1 if he page is less than 5 from the end', function () {
      let props = Object.assign(Paginatify.defaultProps, {page: 8, pages: 10, rawOutput: true});
      let paginatify = new Paginatify(props);
      expect(paginatify.getPageLinks()).to.eql([1, '…', 6, 7, 8, 9, 10]);
    });

    it('should return an array of numbers given more than 7 pages with a truncation at the beginning and end if the page is more than 5 but less than 5 from the end', function () {
      let props = Object.assign(Paginatify.defaultProps, {page: 6, pages: 10, rawOutput: true});
      let paginatify = new Paginatify(props);
      expect(paginatify.getPageLinks()).to.eql([1, '…', 4, 5, 6, 7, 8, '…', 10]);
    });
  });

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