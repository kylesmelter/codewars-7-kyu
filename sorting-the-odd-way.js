// Given an array of numbers, sort them in such a manner that all the odd numbers 
// in the array are sorted in ascending order and the even numbers are sorted in 
// descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] 
// produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round 
// them down while checking for odd/even. The output must have the original numbers!

// If there are no issues with the kata and you successfully completed it, please 
// rank and upvote!

function sortItOut(array){
  // We'll start by creating arrays for both the odd and even numbers using .filter(), .parseInt(),
  // (this will check if a number is odd or even without the decimal), and .sort()
  let odds = array.filter(x => Number.parseInt(x) % 2 !== 0).sort((a,b) => a - b);
  let evens = array.filter(x => Number.parseInt(x) % 2 === 0).sort((a,b) => b - a);
  // Then all we need to do is use the spread operator to combine 'odds' and 'evens' into a single
  // array
  return [...odds, ...evens];
};