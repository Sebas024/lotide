const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

// Test case
console.log(flatten([1, 2, [3, 4], 5, [6]])); // Output: [1, 2, 3, 4, 5, 6]



module.exports = flatten;