// Importing the 'expect' function from the 'chai' library to perform assertions
const { expect } = require('chai');

const NumbersValidator = require('../../app/numbers-validator');

describe('isNumberEven', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });


  describe ('positive cases', () => {
    it('should return true if number is even', () => {
        expect(validator.isNumberEven(4)).to.be.equal(true);
    });
  });

  describe ('negative cases', () => {
    it('should return true if number is even', () => {
        expect(validator.isNumberEven("")).to.be.equal(true);
    });
  });
});
