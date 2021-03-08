const middle = (array) => {
  const midNum = Math.floor(array.length / 2),
    secNum = midNum - 1,
    arrMid = [];

  if (array.length === 1 || array.length === 2) {
    return arrMid;
  } else if (array.length % 2 !== 0) {
    arrMid.push(array[midNum]);
  } else if (array.length % 2 === 0) {
    arrMid.push(array[secNum], array[midNum]);
  }
  return arrMid;
};

module.exports = middle;