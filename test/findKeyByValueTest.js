const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');



const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


findKeyByValue({name: "johnny", "lmao" : "lol",}, "johnny");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");