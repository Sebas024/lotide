const middle = function(array) {
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

console.log(middle([5, 10, 90]));

// // TEST CODE
// console.log("Middle of [1]:");
// assertArraysEqual(middle([1]), []);
// console.log("Middle of [1, 2]:");
// assertArraysEqual(middle([1, 2]), []);
// console.log("Middle of [1, 2, 3]:");
// assertArraysEqual(middle([1, 2, 3]), [2]);
// console.log("Middle of [1, 2, 3, 4, 5]:");
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// console.log("Middle of [1, 2, 3, 4]:");
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// console.log("Middle of [1, 2, 3, 4, 5, 6]:");
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


module.exports = middle;