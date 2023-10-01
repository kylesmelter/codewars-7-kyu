// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.

function validateWord(s) {
    // We'll start by making sure every value in the parameter, 's,' is lowercase
    // using .toLowerCase()
    s = s.toLowerCase();
    // Next, we'll create an object, 'cache,' that will store every value and its
    // number of occurrences
    let cache = {};
    // Then, we'll create a for-loop to iterate over 's'
    for(let i = 0; i <= s.length - 1; i++) {
      // Inside, we'll create a variable, 'value,' that will store the current
      // value of the loop
      let value = s[i];
      // We'll then either increase the value of value by 1 if it's already 
      // contained within 'cache,' or we'll set it equal to 1
      cache[value] = cache[value] + 1 || 1;
    };
  
    // We'll then create a variable, 'values,' that will be an array of all the
    // values found with 'cache'
    let values = Object.values(cache);
    // Next, we'll use .filter() to see if the length of a filtered array where
    // x is equal to the first value in 'values' equals the length of values,
    // and if it does we'll return true. If not, false
    if(values.filter(x => x === values[0]).length === values.length) {
      return true;
    } else {
      return false;
    };
};