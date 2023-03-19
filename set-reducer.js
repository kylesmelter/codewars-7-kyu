// Set Reducer
// Intro
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
// Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

// When your function has reduced the array to a single integer following these rules, it should return that integer.

// [2] => 2

// Rules and assertions
// All test arrays will be 2+ in length
// All integers in the test arrays will be positive numbers from 0 - 9
// You should return an integer, not an array with 1 element

function setReducer(input) {
    // We'll start by checking to see if the input array has a length of 1, and if it does we'll return the value
    // in the array
    if(input.length === 1) {
        return input[0];
    };
    // Next we'll create an empty array to push values to
    let result = [];
    // Then we'll create a for-loop so we're able to loop through the input array. We'll also create a count
    // variable in the initializer
    for(let i = 0, count = 1; i < input.length; i++) {
        // Inside our loop we'll create an if-conditional. If the current value of the loop is eqaul to the upcoming
        // value, we'll increase our count variable by 1
        if(input[i] === input[i+1]){
            count += 1;
        } else {
            // Otherwise, we'll push the value of count to our 'result' array, and reset the value of count to 1
            result.push(count);
            count = 1;
      };
    };
    // Now we just need to use some recursion and return our function, but the new argument each time will be
    // our result array
    return setReducer(result);
};