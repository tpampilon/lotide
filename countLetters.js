const assertEqual = function(actual, expected) {
  let act = actual.toString();
  let exp = expected.toString();

  if (act === exp) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

const countLetters = function(countString) {
  const number = {};
  const noSpace = countString.split(' ').join('');
  
  for (let i = 0; i < noSpace.length; i++) {
    number[noSpace][i] = 0;
  }
  
  return number;
};



