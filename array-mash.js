// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

function arrayMash (array1, array2) {
    // We'll start by creating an empty array, 'result,' that we'll use to create
    // our new array
    let result = [];
    // Next, we'll create a for-loop to iterate over array1
    for(let i = 0; i <= array1.length - 1; i++) {
      // For each loop, we'll use .push() to add the current value of each array
      // to 'result'
      result.push(array1[i]);
      result.push(array2[i]);
    };
    // All we need to do now is return 'result!'
    return result;
};