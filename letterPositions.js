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

const letterPositions = function(sentence) {
  const results = {};
  
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] === ' ') {
      continue;
    } else if (sentence[i] in results) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

// assertArraysEqual(letterPositions("hello").e, [1]);

// console.log(letterPositions("lighthouse in the house"));