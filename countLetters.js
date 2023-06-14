const countLetters = function(string) {
  const obj = {};
  for (const letter of string) {

    if (letter !== ' ') { // Filters the spaces in the string
      if (obj[letter]) { // if the letter has already been counted, adds 1 to the count.
        obj[letter] = obj[letter] += 1;
      } else { // If the letter does not exist in the result object, creates it
        obj[letter] = 1;
      }
    }
  }
  return obj;
};


module.exports = countLetters;