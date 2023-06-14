// it will check if 2 objects are equal and return true or false
const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(actual, expected) {

  //  it takes in 2 objects, prints certain message if true, another message if false
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};




module.exports = assertObjectsEqual;