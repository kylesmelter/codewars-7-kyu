// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]

function largest(n,xs){
    // The first thing we'll do is check to see if n === 0, and if it is we'll return an empty array
    if(n === 0) {
      return [];
    };
    // Next, we'll create a copy on the array parameter so we don't mutate the original array
    let sliced = xs.slice();
    // We'll then sort our sliced array from smallest to larget
    sliced = sliced.sort((a,b) => a - b);
    // And then we'll use the slice method to return the final n numbers in the sorted array
    return sliced.slice(-n);
};