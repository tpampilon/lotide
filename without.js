const without = (source, itemsToRemove) => {
  let remaining = source;
  for (let i = 0; i < source.length; i++){
    for(let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remaining.splice(i,1);
      }
    }
  }
  return remaining;
};

module.exports = without;