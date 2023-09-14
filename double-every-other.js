// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

function doubleEveryOther(a) {
  // We'll use .map() and the ternary operator to help us with this one. If the index of 'x' is even,
  // we'll leave x as-is, but if it's odd we'll multiply 'x' by 2. Then we'll return it!
  return a.map((x, i) => i % 2 === 0 ? x = x : x = x * 2);
};