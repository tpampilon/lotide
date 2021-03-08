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

module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// // console.log(Object.keys(ab).length);