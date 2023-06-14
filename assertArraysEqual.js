const eqArrays = require('./eqArrays');

//take 2 arrays and console.log messege if true or false
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: [${array1}] !== [${array2}]`);
    return false;
  }
};

module.exports = assertArraysEqual;


