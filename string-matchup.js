// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

function solve(a,b){
    // We'll start by creating an empty array, 'result,' to push our values to
    let result = [];
    // Next, we'll create a for-loop to iterate over 'b'
    for(let i = 0; i <= b.length - 1; i++) {
      // Inside the loop we'll have an if-conditional and .includes() that will check to see if 'a'
      // includes the current value, 'b[i],' and if it does we'll use .filter() and .length on 'a' to
      // find out how many values of 'b[i]' are within 'a' and .push() that value to 'result.' If 'a'
      // doesn't include the value of 'b[i],' we'll push 0 to 'result'
      if(a.includes(b[i])) {
        result.push(a.filter(x => x === b[i]).length);
      } else {
        result.push(0);
      };
    };
    // Now we just need to return 'result!'
    return result;
};