// Write reverseList function that simply reverses lists.

function reverseList(arr) {
    // First, we'll check to see if array parameter has a length of 0, and if it does,
    // we'll return an empty array
    if(arr.length === 0) {
      return [];
    // If the array parameter has a length greater than 0, we'll simply return a reversed
    // version of it  
  } else {
      return arr.reverse();
  };
};