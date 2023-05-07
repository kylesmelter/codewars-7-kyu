// In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.

// Example:

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

function getLargerNumbers(a, b) {
    // We'll start by creating an empty array, 'result,' so we can push our values to it
    let result = [];
    // Next we'll create a for-loop to compare the values in each array
    for(let i = 0; i <= a.length - 1; i++) {
      // Inside the loop we'll have our if-conditionals created to decide which values
      // we'll have the .push() method send to our array, 'result'
      if(a[i] > b[i]) {
        result.push(a[i]);
      };
      
      if(b[i] > a[i]) {
        result.push(b[i]);
      };
      
      if(a[i] === b[i]) {
        result.push(a[i]);
      };
    };
    // All we have to do now is return our 'result' array!
    return result;
};