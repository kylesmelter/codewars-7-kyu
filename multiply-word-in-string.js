// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5)

function modifyMultiply (str,loc,num) {
    // Well start by splitting the input array into an array
    let array = str.split(' ');
    // Then we'll create a variable, word, and set it equal to the word at the index position of 'loc'
    let word = array[loc];
    // Next, we'll create another variable, result, and set it equal to an empty string
    let result = '';
    // Then we'll create a for loop to act as a counter from 1 to num
    for(let i = 1; i <= num; i++) {
      // With each iteration, we'll add 'word' + a '-' to our result variable
      result += `${word}-`;
    }
    // Now we'll return a sliced version of result beginning at 0 and going through result.length - 1
    return result.slice(0, result.length - 1);
}; 