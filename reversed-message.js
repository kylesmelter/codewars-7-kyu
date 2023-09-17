// DESCRIPTION:
// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

function reverseMessage(str) {
    // We'll start by turning the parameter, 'str,' into an array, and then
    // reversing it
    let array = str.split(' ').reverse();
    // Next, we'll creae an empty array that we can push our values to while
    // looping
    let result = [];
    // Then we'll create a for-loop to iterate over 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the array, we'll use .push() to push a reversed version of the
      // current value to 'result'
      result.push(array[i].split('').reverse().join(''));
    };
    // Finally, we'll use .map() to create anew array while also using .slice()
    // to make sure the first character of each word is uppercase, and the rest
    // of the word is lowercase
    return result.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join(' ');
};