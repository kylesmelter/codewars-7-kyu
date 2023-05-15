// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

function nthChar(words){
    // We'll first start by using an if-conditional to see if the length of
    // the input array === 0, and if it does we'll return ''
    if(words.length === 0) {
      return '';
    };
    // If the input array's length > 0, we'll have this empty array, 'result,' ready
    // so we can add values to it while looping
    let result = [];
    // Now we'll use a for-loop to iterate through the input array
    for(let i = 0; i <= words.length - 1; i++) {
      // Inside the loop, we'll use the .slice() method to grab the letter matching 
      // the index of i, and then we'll use the .push() method to add it to our 'result'
      // array
      result.push(words[i].slice(i, i + 1));
    };
    // All that's left do is use the .join() method to turn our array of values into
    // a string and return it!
    return result.join('');
};