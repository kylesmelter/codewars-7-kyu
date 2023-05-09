// DESCRIPTION:
// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)
// Good luck :)

function alphabetic(s) {
    // We'll start with an if-conditional to compare the input string with a sorted version of
    // the input string using the .split() method to turn it into an array so we can use the
    // .sort() method before using the .join() method to turn it back into a string
    if(s === s.split('').sort().join('')) {
      return true;
    } else {
      return false;
    };
};