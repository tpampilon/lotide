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

const takeUntil = (array, callback) => {
  const newArr = [];

    for (const arr of array) {
      if (callback(arr)) {
        break;
      } else {
      newArr.push(arr);
      }
    }

  return newArr;
}

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// console.log('---');

// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]