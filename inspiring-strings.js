// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

function longestWord(stringOfWords) {
    // We'll start by creating two variables. 'Length' will store the length of the longest word,
    // and 'word' will store the word itself
    let length = 0;
    let word;
    // Next, we'll turn the parameter, 'stringOfWords,' into an array 
    let array = stringOfWords.split(' ');
    // Then we'll create a for-loop to iterate over 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll have an if-conditional created that will check the length of each word
      if(array[i].length >= length) {
        length = array[i].length;
        word = array[i];
      };
    };
    // All we need to do now is return 'word!'
    return word;
};