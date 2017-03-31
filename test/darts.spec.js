/*jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const darts = require('../darts.js');

describe('throw function', () => {

  it('should be function', () => {
    expect(darts).to.be.a('function');
  });

  it('should return the score of certain values of input', () => {
    expect(darts([1, 5, 11])).to.be.equal(15);
    expect(darts([15, 20, 30])).to.be.equal(0);
    expect(darts([6, 8, 12, 20])).to.be.equal(10);
    expect(darts([1, 2, 1, 4, 4, 2])).to.be.equal(160);
    expect(darts([1,7,9,14,5])).to.be.equal(25);
    expect(darts([2,3,3])).to.be.equal(130);
  });

  it('should add a bonus of 100 points in case all scores are below 5', () => {
    expect(darts([1, 2, 1, 4, 4, 2])).to.be.equal(160);
    expect(darts([2,3,3])).to.be.equal(130);
  });

  it('should be an array of length 1 or more', () => {
    expect(darts([])).to.be.equal(-1);
  });

  it('should include only numbers', () => {
    expect(darts.bind(null,["a",5])).to.throw("Pass numbers only !!!");
    expect(darts.bind(null,[3,"b",4])).to.throw("Pass numbers only !!!");
    expect(darts.bind(null,[3,16,4,"d"])).to.throw("Pass numbers only !!!");
  });

  it('The argument should be an array', () => {
    expect(darts.bind(null,"bonjour")).to.throw("Pass an array !!!");
    expect(darts.bind(null,5,4)).to.throw("Pass an array !!!");
  });

});