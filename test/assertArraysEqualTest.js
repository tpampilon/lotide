const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {

  it('returns "✅ Assertion Passed: 1,2,3 === 1,2,3 ✅" when [1, 2, 3] & [1, 2, 3] is passed', () => {
    const firstInput = [1, 2, 3];
    const secInput = [1, 2, 3];
    const expected = '✅ Assertion Passed: 1,2,3 === 1,2,3 ✅';

    assert.strictEqual(assertArraysEqual(firstInput, secInput), expected);
  });

  it('returns "✅ Assertion Passed: 1,2,3 === 1,2,3 ✅" when ["1", "2", "3"] & ["1", "2", "3"] is passed', () => {
    const firstInput = ["1", "2", "3"];
    const secInput = ["1", "2", "3"];
    const expected = '✅ Assertion Passed: 1,2,3 === 1,2,3 ✅';

    assert.strictEqual(assertArraysEqual(firstInput, secInput), expected);
  });
});


// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);