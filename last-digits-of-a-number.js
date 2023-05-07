// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]

function lastDigit(n, d) {
    // We'll first check if 'd' is <= 0, and if it is we'll return an empty array 
    if(d <= 0) {
      return [];
    } else {
      // If 'd' > 0 we'll use the .toString() method so we can use the .slice() method
      // with a '-' so it starts at the end of the string, and then we'll turn our sliced
      // string back into an array with the .split() method so we can use the .map() method
      // with 'Number' to return an array of numbers
        return n.toString().slice(-d).split('').map(Number);    
    };
};