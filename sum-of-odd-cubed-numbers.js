// DESCRIPTION:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    // We'll first start by creating an empty array, 'array,' so we can push our new values to it
    let array = [];
    // Then we'll create another variable, 'count,' that will keep track of the sum of the cubed
    // odd numbers
    let count = 0;
    // Next, we'll use a for-loop to iterate through the input, 'arr'
    for(let i = 0; i <= arr.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will check the type of the current value.
      // If the type of the current value !== number, we'll return undefined. But if the current value
      // is a number we'll use the Math.pow() method to cube the value, and then use the .push() method
      // to add it to our 'array' array
      if(typeof arr[i] !== 'number') {
        return undefined;
      } else {
        array.push(Math.pow(arr[i], 3));
      };
    };
    // We'll then create another for-loop to iterate our 'array' variable so we can add the odd values
    // to our 'count' variable
    for(let i = 0; i <= array.length - 1; i++) {
      if(array[i] % 2 !== 0) {
        count += array[i];
      };
    };
    // All we need to do now is return 'count'
    return count;
};