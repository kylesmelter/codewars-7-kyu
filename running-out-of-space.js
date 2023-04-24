// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(array){
  // We'll first start by creating an empty array to push our values to while looping
    let result = [];
  // Next we'll create a for-loop so we can iterate over the input array
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll use the .slice() method to push a slice of the input array,
      // always starting with the first value, and going up to i + 1, before using .join()
      // method to turn the array slice to a string
        result.push(array.slice(array[0], i + 1).join(''));
    };
    // All we need to do now is return 'result!'
    return result;
};