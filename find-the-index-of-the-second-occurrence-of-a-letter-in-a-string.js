// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1
// Good luck ;) And don't forget to rate this Kata if you liked it.

function secondSymbol(s, symbol) {
    // We'll start by creating a variable, 'count,' that will keep track of the number times
    // 'symbol' has appeared during a for-loop which we'll create next
    let count = 0;
    // Now we'll create a for-loop to iterate over the 's' input
    for(let i = 0; i <= s.length - 1; i++) {
      // Inside the for-loop we'll have an if-conditional that will check to see if the
      // current value === symbol, and if it does we'll increase the value of 'count' by 1
      if(s[i] === symbol) {
        count += 1;
      };
      // After that, we'll have a second if-conditional created to check if our 'count'
      // variable === 2, and if it does we'll return the current value of i
      if(count === 2) {
        return i;
      };
    };
    // If we're able to make it through the for-loop without 'count' ever === 2, then we'll
    // return -1 at the end
    return -1;
};