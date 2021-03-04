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

const map = (arr, func) => {
  const newArr =[]; 
  
  for (const arr1 of arr) {
    newArr.push(func(arr1));
  }
  return newArr;
};

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);