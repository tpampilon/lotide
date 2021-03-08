const map = (arr, func) => {
  const newArr =[]; 
  
  for (const arr1 of arr) {
    newArr.push(func(arr1));
  }
  return newArr;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);