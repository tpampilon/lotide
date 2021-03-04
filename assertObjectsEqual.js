const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (key in object1) {
      if(object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    return console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)} ✅`);
  } else {
    return console.log(`🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)} 🛑`);
  }
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); 