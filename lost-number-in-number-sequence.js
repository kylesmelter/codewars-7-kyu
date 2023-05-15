// DESCRIPTION:
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
    // Let's start by using the .sort() method on both of the input arrays to sort their
    // values from smallest to greatest
    let sortedArr = arr.sort((a,b) => a - b);
    let sortedMixArr = mixArr.sort((a,b) => a - b);
    // Next, we'll use an if-conditional to check if the lengths of the two sorted arrays
    // === each other. If they don't, we can return 0
    if(sortedArr.length === sortedMixArr.length) {
      return 0;
    };
    // If the two lengths !== each other, we'll use a for-loop to iterate over our
    // 'sortedArr'
    for(let i = 0; i <= sortedArr.length - 1; i++) {
      // Inside the loop we'll have an if-conditional to check if the current value of each
      // array !== the other, and if it doesn't match the other we've found our missing number
      // and we'll return the current value of 'sortedArr'
      if(sortedArr[i] !== sortedMixArr[i]) {
        return sortedArr[i];
      };
    };
};