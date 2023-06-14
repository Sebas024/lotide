const flatten = function(array) {
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flattenedArray.push(...flatten(element));
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

module.exports = flatten;



1