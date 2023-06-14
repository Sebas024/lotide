const countOnly = function(allItems, itemsToCount) {
  //function should count how many intances of each string, return results in an object
  let results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


module.exports = countOnly;

