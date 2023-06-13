const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  for (let key in object) {
    console.log(key);
    if (object[key].includes(value)) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


findKeyByValue({name: "johnny", "lmao" : "lol",}, "johnny");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");


module.exports = findKeyByValue;