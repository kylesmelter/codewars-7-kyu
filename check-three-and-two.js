// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
    // We'll start by creating an empty array, 'result,' so we can push some values to
    let result = [];
    
    // Next, we'll create a for-loop to iterate over the parameter, 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll create a variable, 'filter' that will store the length of an array
      // containing the same values as the current value
      let filter = array.filter(x => x === array[i]).length;
      // Now we'll push the value of 'filter' to 'result'
      result.push(filter);
    };
    // Now we'll create an if-conditional to check if 'result' includes both a 3 and a 2
    if(result.includes(3) && result.includes(2)) {
      return true;
    } else {
      return false;
    };
};