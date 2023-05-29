// DESCRIPTION:
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {
  // We'll start by using the .sort() method to sort the numbers in descending order
  let sorted = numbers.sort((a,b) => b - a);
  // All we need to do now is return the sum of the first two numbers in our 'sorted' array!
  return sorted[0] + sorted[1];
};