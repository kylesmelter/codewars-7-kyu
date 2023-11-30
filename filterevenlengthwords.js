// Write a function called "filterEvenLengthWords".

// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

// console.log(output); // --> ['word', 'word']

function filterEvenLengthWords(words) {
    // We'll start by checking if 'words' is empty, and if it is we'll return an empty array
    if(words.length === 0) {
      return [];
    };
    // If it isn't empty, we'll use .filter() to help us filter out any odd-length words and return
    // what's left!
    return words.filter(x => x.length % 2 === 0);
};