const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () =>{

  it('returns true for [1, 2, 3] & [1, 2, 3] is passed', () => {
    const firstInput = [1, 2, 3];
    const secInput = [1, 2, 3];
    const expected = true;

    assert.strictEqual(eqArrays(firstInput, secInput), expected);
  });

  it('returns false for [1, 2, 3] & [3, 2, 1] is passed', () => {
    const firstInput = [1, 2, 3];
    const secInput = [3, 2, 1];
    const expected = false;

    assert.strictEqual(eqArrays(firstInput, secInput), expected);
  });

  it('returns true for ["1", "2", "3"] & ["1", "2", "3"] is passed', () => {
    const firstInput = ["1", "2", "3"];
    const secInput = ["1", "2", "3"];
    const expected = true;

    assert.strictEqual(eqArrays(firstInput, secInput), expected);
  });

  it('returns false for ["1", "2", "3"] & ["1", "2", 3] is passed', () => {
    const firstInput = ["1", "2", "3"];
    const secInput = ["1", "2", 3];
    const expected = false;

    assert.strictEqual(eqArrays(firstInput, secInput), expected);
  });
});