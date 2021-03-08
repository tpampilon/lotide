const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] when ['Yo Yo', 'Lighthouse', 'Labs'] is passed", () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    const expected = ["Lighthouse", "Labs"];

    assert.deepEqual(tail(input), expected);
  });

});