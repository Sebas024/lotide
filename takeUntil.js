const takeUntil = function(array, callback) {
  //function takeUntil returns a slice of the array with elements taken from the beginning
  let final = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      final.push(item);
    }
  }
  return final;
};


module.exports = takeUntil;