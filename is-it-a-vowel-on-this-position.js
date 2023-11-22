// Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

// A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }
// P.S. If n < 0, return false

function checkVowel(string, position) {
    // First, we'll start by making sure 'position' is >= 0, and if it's less than 0 we'll return false
    if(position < 0) {
      return false;
    };
    // Next, we'll create an array containing upper- and lowercase versions of each vowel so we
    // can easily use the .includes() method
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // Then we'll create a for-loop to iterate over 'string'
    for(let i = 0; i <= string.length - 1; i++) {
      // Inside the for-loop we'll have an if-conditional that will check to see if i === position,
      // and if 'vowels' includes the value at that position. If it does we'll return true
      if(i === position && vowels.includes(string[i])) {
        return true;
      };
    };
    // All that's left to do is return false if nothing is caught in our for-loop
      return false;
};