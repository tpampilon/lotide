const findKeyByValue = function(obj, value) {
  let ans = undefined;
  
  for (key in obj) {
    if (obj[key] === value) {
      ans = key
    } 
  }
  return ans;
};

module.exports = findKeyByValue;
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(Object.keys(bestTVShowsByGenre))

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);