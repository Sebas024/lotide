const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

eqArrays(assertArraysEqual([1, 2, 5], [1, 2, 5]), true);

eqArrays(assertArraysEqual([7, 4, 9], [1, 2, 5]), false);