const map = function(array, callback) {
  //map function will return a new array based on the results of the callbackFunction
  const results = [];
  for (let item of array) {
    console.log('item BEFORE:', item);
    console.log('item AFTER:', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
};


module.exports = map;