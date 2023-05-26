// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

const arrCheck = value => {
  // We'll start off using a for-loop to iterate over the input, 'value'
  for(let i = 0; i <= value.length - 1; i++) {
    // Inside the loop we'll use the Array.isArray() method to check if the current
    // value isn't an array, and if it isn't we'll return false
    if(Array.isArray(value[i]) === false) {
      return false;
    };
  };
  // If we're able to make it all the way through the loop, we'll return true at the end
  return true;
};