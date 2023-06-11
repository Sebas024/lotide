// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

const assertEqual = require('./assertEqual');

// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqArrays = require('./eqArrays');


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: [${array1}] is the same to [${array2}]`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: [${array1}] is different to [${array2}]`);
    return false;
  }
};

eqArrays(assertArraysEqual([1, 2, 3], [1, 2, 5]), true);


module.exports = assertArraysEqual;