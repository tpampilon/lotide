const assertEqual = (actual, expected) => {
  // let act = actual.toString();
  // let exp = expected.toString();

  if (actual == expected) {
    return `✅ Assertion Passed: ${actual} === ${expected} ✅`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`;
  }
};

module.exports = assertEqual;