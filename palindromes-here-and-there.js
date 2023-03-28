// An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

// For example:

// [101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
// [45, 21, 303, 56]        ==>  [0, 0, 1, 0]

function convertPalindromes(numbers) {
    // We'll start by creating an array to push our values to
    let result = [];
    // Then we'll loop through the input array, numbers
    for(let i = 0; i <= numbers.length - 1; i++) {
    // If the reversed current value of the loop === the current value, we'll push 1
    // to our 'result' array. If not, we'll push 0
      if(numbers[i].toString().split('').reverse().join('') === numbers[i].toString()) {
        result.push(1);
      } else {
        result.push(0);
      };
    };
    // All we need to do now is return our 'result' array!
    return result;
};