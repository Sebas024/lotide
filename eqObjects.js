const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }

    } return true;

  }
};

const eqObjects = function(object1, object2) {

  let objOneKeys = Object.keys(object1);
  let objTwoKeys = Object.keys(object2);
  let equalArrays = true;
  if (objOneKeys.length !== objTwoKeys.length) {
    equalArrays = false;
  } else {

    for (const key in object1) {

      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key])) {
          equalArrays = eqArrays(object1[key], object2[key]);
        } else {
          equalArrays = false;
        }
      } else {
        equalArrays = true;
      }

      
    }
    return equalArrays;
  }
};
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false





const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false