// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

function duplicates(arr) {
  // We'll first start by creating an empty array, 'holder,' that will help us compare
  // to values in a for-loop to check if they've already appeared previously in the 
  // input array
  let holder = [];
  // Next, we'll create another empty array, 'result,' that we'll use to push dupolicate
  // values to
  let result = [];
  // Now we'll use a for-loop to iterate throught the input array
  for(let i = 0; i <= arr.length - 1; i++) {
    // Inside the loop we'll have an if-conditional and the .includes() method 
    // to help us figure out which values are duplicates. If our 'holder' array already
    // includes the current value of the loop, we'll use the .push() method to add that
    // value to our 'result' array, and if it doesn't we'll push that value to the
    // 'holder' array
    if(holder.includes(arr[i])) {
      result.push(arr[i]);
    } else {
      holder.push(arr[i]);
    };
  };
  // Because the way we're doing this allows for duplicates within our 'result' array,
  // we can turn it into a Set to eliminate any duplicate values
  let set = new Set(result);
  // Now we need to convert the Set back into an array using the spread operator
  set = [...set];
  // All that's left to do is return 'set!'
  return set;
};