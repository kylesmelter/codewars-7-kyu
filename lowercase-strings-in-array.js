// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']

function arrayLowerCase(arr) {
    // Let's start by creating an empty array to push our values to
    let result = [];
    // Then we'll create a for-loop to iterate over the input array
    for(let i = 0; i <= arr.length - 1; i++) {
      // If the type of i === string, we'll push a lowercase version of it to
      // our 'result' array, and if the type isn't 'string,' we'll push the 
      // value of i to our 'result' array
      if(typeof arr[i] === 'string') {
        result.push(arr[i].toLowerCase());
      } else {
        result.push(arr[i]);
      };
    };
    // All we need to do now is return 'result!'
    return result;
};
  