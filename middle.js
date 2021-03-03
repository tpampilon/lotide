const eqArrays = function(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅ Assertion Passed: ${arr1} === ${arr2} ✅`);
  } else {
    return console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2} 🛑`);
  }
};

const middle = function(array) {
  const midNum = Math.floor(array.length / 2),
    secNum = midNum - 1,
    arrMid = [];

  if (array.length === 1 || array.length === 2) {
    return arrMid;
  } else if (array.length % 2 !== 0) {
    arrMid.push(array[midNum]);
  } else if (array.length % 2 === 0) {
    arrMid.push(array[secNum], array[midNum]);
  }

  return arrMid;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log('');
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); 0; // => [3]
console.log('');
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]