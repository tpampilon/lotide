const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  
  it('returns "✅ Assertion Passed: 1 === 1 ✅" if (1, 1) is passed', () => {
    const firstInput = 1;
    const secInput = 1;
    const expected = '✅ Assertion Passed: 1 === 1 ✅';

    assert.strictEqual(assertEqual(firstInput, secInput), expected)
  });

  it('returns "🛑 Assertion Failed: Lighthouse Labs !== Bootcamp 🛑" if ("Lighthouse Labs", "Bootcamp") is passed', () => {
    const firstInput = "Lighthouse Labs";
    const secInput = "Bootcamp";
    const expected = '🛑 Assertion Failed: Lighthouse Labs !== Bootcamp 🛑';

    assert.strictEqual(assertEqual(firstInput, secInput), expected)
  });
});