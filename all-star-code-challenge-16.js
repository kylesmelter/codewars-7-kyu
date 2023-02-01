// DESCRIPTION:
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #16

// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"
// Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string

function noRepeat(str) {
    let collection = {};
    
    for(let i = 0; i <= str.length - 1; i++) {
      let value = str[i];
      
      collection[value] = collection[value] + 1 || 1;
    };
    
    for(let key in collection) {
      if(collection[key] === 1) {
        return key;
      };
    };
};