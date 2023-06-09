const eqArrays = require('./eqArrays');


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const item in object1) {
    if (Array.isArray(object1[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
      // if (eqArrays(object1[key], object2[key])) {
      //   return false;
      // }
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;
