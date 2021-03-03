const eqArrays = function(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅ Assertion Passed: ${arr1} === ${arr2} ✅`);
  } else {
    return console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2} 🛑`);
  }
}

const flatten = function(arr) {
  let flat = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false) {
      flat.push(arr[i]);
    }
    for (let j = 0; j < arr[i].length; j++) {
      flat.push(arr[i][j]);
    }
  }
  return flat;
};