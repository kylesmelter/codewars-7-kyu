// This Kata is intended as a small challenge for my students

// All Star Code Challenge #20

// Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
// Raise an error if input arguments are not of equal length.

// addArrays([1,2],[4,5]); // => [5,7]
// addArrays([1,2,3],[4,5]); // => Error
// Note:
// Expect array input to either contain numbers or strings only
// The function should also allow for concatenating string

// addArrays(["a"],["b"]) // => ["ab"]

function addArrays(array1, array2) {
    // We'll first check to see if the two input arrays have the same length. If they don't,
    // we'll throw an error, but if they do we'll continue on with our function
    if(array1.length !== array2.length) {
      throw error;
    };
    // Next, we'll create an empty array to push our new values to
    let result = [];
    // Then we'll use a for-loop to iterate over the first input array
    for(let i = 0; i <= array1.length - 1; i++) {
      // Inside the loop, we'll use the .push() method to push the sum of the current values
      /// of each array to our 'result' array
      result.push(array1[i] + array2[i]);
    };
    // All we need to do now is return 'result!'
    return result;
};