// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

function filterLongWords(sentence, n) {
    // We'll start by using .split() to turn 'sentence' into an array
    let array = sentence.split(' ');
    // We'll use .filter() to create a filtered array where the length of each
    // word is > n
    return array.filter(x => x.split('').length > n);
};