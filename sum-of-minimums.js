// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

function sumOfMinimums(arr) {
    // First, we'll create a counter variable to add our values to
    let result = 0;
    // Next, we'll create a for-loop to iterate over the input array
    for(let i = 0; i <= arr.length - 1; i++) {
      // Inside the loop we'll create a variable, 'sorted,' that will be the sorted
      // version of i
      let sorted = arr[i].sort((a,b) => a - b);
      // Once i is sorted, we'll add the first value in i to our 'result' variable
      result += sorted[0];
    };
    // All we have to do now is return 'result!'
    return result;
};