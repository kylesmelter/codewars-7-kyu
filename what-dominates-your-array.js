// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

function dominator(arr) {
    // We'll start by creating an object, 'cache,' to store the array values
    // along with their number of appearances
     let cache = {};
    // Next, we'll use a for-loop to iterate over the parameter, 'arr'
    for(let i = 0; i <= arr.length - 1; i++) {
      // Inside the loop, we'll create a variable, 'current,' that will store
      // the current value of the loop
      let current = arr[i];
      // Then, we'll add 1 to the number of appearances for the current variable
      // in our 'cache' object if it already exists, or we'll set it equal to 1
      cache[current] = cache[current] + 1 || 1;
    };
    // Now, we'll iterate over our object, 'cache'
    for(let key in cache) {
      // If any value appears more than the length of the input divided by 2, 
      // we'll return that value
      if(cache[key] > (arr.length / 2)) {
        return +key;
      };
    };
    // If nothing is returned by this point, we'll return -1
    return -1;
};