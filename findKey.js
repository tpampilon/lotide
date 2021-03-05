const assertEqual = function(actual, expected) {
  let act = actual.toString();
  let exp = expected.toString();

  if (act === exp) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

const findKey = (obj, func) => {
  let ans = undefined;

  for (const key in obj) {
    if (func(obj[key])) {
      ans = key;
      break;
    }
  }
  return ans;
};


// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), ["noma"]); // => "noma"