const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    return console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)} ✅`);
  } else {
    return console.log(`🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)} 🛑`);
  }
};

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); 