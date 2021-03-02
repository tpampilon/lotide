const assertEqual = function(actual, expected) {
  let act = actual.toString();
  let exp = expected.toString();

  if (act === exp) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let last = arr.slice(1);
  return last;
};