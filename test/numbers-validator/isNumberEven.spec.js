// Importing the 'expect' function from the 'chai' library to perform assertions
const { expect } = require('chai');
const { beforeEach, afterEach, describe, it } = require('mocha');

const NumbersValidator = require('../../app/numbers-validator');

describe('isNumberEven', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive cases', () => {
    it('should return true if number is even', () => {
      expect(validator.isNumberEven(4)).to.be.equal(true);
    });

    it('should return array of even numbers', () => {
      const input = [1, 2, 3, 4, 5, 23, 10];
      expect(validator.getEvenNumbersFromArray(input)).to.eql([2, 4, 10]);
    });

    it('should return true if given array cinsist only numbers', () => {
      const input = [1, 2, 3, 4, 5, 23, 10];
      expect(validator.isAllNumbers(input)).to.be.eql(true);
    });

    it('should return true if input is number', () => {
      expect(validator.isInteger(4)).to.be.equal(true);
    });
  });

  describe('negative cases', () => {
    it('should return false if number is non even', () => {
      expect(validator.isNumberEven(5)).to.be.equal(false);
    });

    it('should return error if wrong type of variable', () => {
      const input = 'four';
      expect(() => {
        validator.isNumberEven(input);
      }).to.throw(`[${input}] is not of type "Number" it is of type "${typeof input}"`);
    });

    it('should return error if wrong type of array', () => {
      const input = [1, '2', 3, null, '5', 23, 10];
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array of "Numbers"`);
    });

    it('should return false if given array cinsist non numbers', () => {
      const input = [1, '2', 3, null, '5', 23, 10];
      expect(validator.isAllNumbers(input)).to.be.eql(false);
    });

    it('should return error if input is non array', () => {
      const input = {};
      expect(() => {
        validator.isAllNumbers(input);
      }).to.throw(`[${input}] is not an array`);
    });

    it('should return false if input is non number', () => {
      const input = '4';
      expect(() => {
        validator.isInteger(input);
      }).to.throw(`[${input}] is not a number`);
    });
  });
});
