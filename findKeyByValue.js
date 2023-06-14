const findKeyByValue = function(object, value) {
  // for (const key of Object.keys(object)) {   //iterate through object's keys
  for (let key in object) {
    console.log(key);
    if (object[key].includes(value)) {
      return key;
    }
  }
};


module.exports = findKeyByValue;

1