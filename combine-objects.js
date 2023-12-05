// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

function combine() {
    // We'll start by creating an array for the arguments so we're able to iterate
    // over them
    let array = [...arguments];
    // Next, we'll create an empty object that we'll add our key-values to
    let result = {};
    // Then we'll create a for-loop to iterate over 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the for-loop we'll have another for-loop to iterate over the current
      // object within 'array'
      for(let key in array[i]) {
        // Inside our nested for-loop we'll have an if-conditional that will check
        // to see if the current key-value pair exists within 'result,' and it does
        // we'll add the value to that key, and if it doesn't we'll simply add that
        // key-value to 'result'
        if(result[key]) {
          result[key] += array[i][key];
        } else {
          result[key] = array[i][key];
        };
      };
    };
    // Now we just need to return 'result!'
    return result;
};