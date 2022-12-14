// DESCRIPTION:
// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!

function toAcronym(inp){
    let array = inp.split(' ');
    let result = [];
    for(let i = 0; i <= array.length - 1; i++) {
      result.push(array[i][0].toUpperCase());
    }
    return result.join('');
};