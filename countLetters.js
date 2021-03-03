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
  
  for(const string of noSpace) {
    if (number[string]){
      number[string] += 1;
    }
    else {
      number[string] = 1;
    }
  }
  
  return number;
};



