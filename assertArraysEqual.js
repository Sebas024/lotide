const eqArrays = require('./eqArrays');


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: [${array1}] !== [${array2}]`);
    return false;
  }
};

eqArrays(assertArraysEqual([1, 2, 3], [1, 2, 5]), true);


module.exports = assertArraysEqual;