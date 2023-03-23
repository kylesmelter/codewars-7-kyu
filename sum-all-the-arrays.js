// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

function arraySum(arr) {
    // We'll start by creating a counter variable, result
    let result = 0;

    // Next, we'll loop through the input array
    for (let i = 0; i < arr.length -1; i++) {
      // If the current value while looping is an array, we'll add the value of the numbers
      // within that array to our result variable using recursion to loop through that array  
      if (Array.isArray(arr[i])) {
        result += arraySum(arr[i]);
      } else {
      // If the current value is a number we'll simply add it to our result counter
        sum += arr[i];
      };
    };
    // All that's left to do now is return our result variable
    return result;
};