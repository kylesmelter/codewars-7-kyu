// DESCRIPTION:
// Challenge:

// Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.

// Example:

// Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers.

// Addendum:

// Think of it as dimension-agnostic value counting. We want to know the total number of integers inside the array and we don't care for the dimensions.

function realSize(arrays) {
    // We'll first set up a counter to keep track of the number of integers
    let count = 0; 
    // Next, we'll create a loop to loop through the input array
    for(let i = 0; i <= arrays.length - 1; i++) {
      // If the current value of the loop is an array, we'll use some recursion and 
      // call the function again using the current value of the loop as the new input  
      if(Array.isArray(arrays[i])) {
        count += realSize(arrays[i]);
      // If the current value is a number, we'll simply add 1 to our counter variable  
      } else if(typeof arrays[i] === 'number') {
        count += 1;
      };
    };
    // All we need to do now is return the value of count!
    return count;
};