const assertEqual = (actual, expected) => {
  // let act = actual.toString();
  // let exp = expected.toString();

  if (actual == expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

module.exports = assertEqual;