const countLetters = function(countString) {
  const number = {};
  const noSpace = countString.split(' ').join('');
  
  for (let i = 0; i < noSpace.length; i++) {
    number[noSpace][i] = 0;
  }
  
  return number;
};

module.exports = countLetters;

