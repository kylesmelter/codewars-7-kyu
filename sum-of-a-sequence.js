// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
    // We'll start with an if-conditional checking to see if 'begin' is greater than or equal to end,
    // and if it is we'll return the applicable answer
    if(begin > end) {
      return 0;
    } else if(begin === end) {
      return begin;
    };
    // We'll then create an array, 'result,' we can use to push our values to so we can use .reduce()
    // later
    let result = [];
    // Then we'll create a for-loop we can use to add the applicable numbers to 'result'
    for(let i = begin; i <= end; i += step) {
      result.push(i);
    };
    // Now we'll use .reduce() on 'result' and return the answer!
    return result.reduce((acc,c) => acc + c, 0)
};