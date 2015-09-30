import React from 'react';
import {expect} from 'chai';
import Paginatify from '../js/paginatify';

describe('paginatify', function () {

  describe('range', function () {

    it('should return an array with a range of numbers', function () {
      let paginatify = new Paginatify({page: 1, totalPages: 1});

      expect(paginatify.range(1, 5)).to.eql([1, 2, 3, 4, 5]);
      expect(paginatify.range(5, 10)).to.eql([5, 6, 7, 8, 9, 10]);
      expect(paginatify.range(5, 1)).to.eql([1, 2, 3, 4, 5]);
    });

  });

  describe('getVisiblePageNumbers', function () {

    it('should return an empty array given 0 pages', function () {
      let paginatify = new Paginatify({page: 1, totalPages: 0});
      expect(paginatify.getVisiblePageNumbers()).to.eql([]);
    });

    it('should return an empty array given negative pages', function () {
      let paginatify = new Paginatify({page: 1, totalPages: -1});
      expect(paginatify.getVisiblePageNumbers()).to.eql([]);
    });

    it('should return an array of 1 given 1 page', function () {
      let paginatify = new Paginatify({page: 1, totalPages: 1});
      expect(paginatify.getVisiblePageNumbers()).to.eql([1]);
    });

    it('should return an array of numbers given less than 8 pages', function () {
      let paginatify = new Paginatify({page: 1, totalPages: 7});
      expect(paginatify.getVisiblePageNumbers()).to.eql([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should return an array of numbers given more than 7 pages with a truncation before the end if he page is less than 5', function () {
      let paginatify = new Paginatify({page: 3, totalPages: 10});
      expect(paginatify.getVisiblePageNumbers()).to.eql([1, 2, 3, 4, 5, '...', 10]);
    });

    it('should return an array of numbers given more than 7 pages with a truncation after 1 if he page is less than 5 from the end', function () {
      let paginatify = new Paginatify({page: 8, totalPages: 10});
      expect(paginatify.getVisiblePageNumbers()).to.eql([1, '...', 6, 7, 8, 9, 10]);
    });

    it('should return an array of numbers given more than 7 pages with a truncation at the beginning and end if the page is more than 5 but less than 5 from the end', function () {
      let paginatify = new Paginatify({page: 6, totalPages: 10});
      expect(paginatify.getVisiblePageNumbers()).to.eql([1, '...', 4, 5, 6, 7, 8, '...', 10]);
    });
  });

  let paginatify = new Paginatify({page: 1, totalPages: 2});
  console.log(paginatify.render());

  //let pagination = <Paginatify page={1}
  //                             totalPages{1}
  //                             onChange={function(newPage, oldPage) {console.log(newPage, oldPage);}}/>
});