const middle = function(array) {
  //need to know array.length
  //if array has =< 2 elements, return an empty array
  //if (odd) array %2 !== 0, return a single middle element
  //if (even) array %2 === 0; return the 2 middle elements
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;

1