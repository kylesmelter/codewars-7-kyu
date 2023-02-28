// Your task is to remove all consecutive duplicate words from a string, 
// leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(s) {
    // Let's start by splitting our string of words into an array of words
    let array = s.split(' ');
    // Then we'll create an empty array we can push our values to after looping through our array of words
    let result = [];
    // We'll push the first word to our empty array because we're going to start
    // looping at index 1, and we need to have an initial word to compare to
    result.push(array[0]);
    // Next is the for loop where we start at index 1 and loop to the end
    for(let i = 1; i <= array.length - 1; i++) {
      // Then we'll use an if conditional to check if the current value does not
      // equal the previous value. If it doesn't, we'll push the current value
      // to our result array
      if(array[i] !== array[i - 1]) {
        result.push(array[i]);
      };
    };
    // All that's left to do is return our joined result array!
    return result.join(' ');
};