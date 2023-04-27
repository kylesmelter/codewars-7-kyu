// DESCRIPTION:
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

function factorial(n) {
    // First, we'll create an if-conditional to see if the input is < 0 or > 12,
    // and if it is we'll throw a RangeError
    if(n < 0 || n > 12) {
      throw RangeError;
    };
    // Next we'll use another if-conditional to see if the input is === to 0 or 1,
    // and if it is we'll return 1
    if(n === 0 || n === 1) {
      return 1;
    } else {
    // Else, we'll use some recursion to return our answer. We'll take the current value of n,
    // multiplied by our function again, but the new input will be the current value of the
    // input minus 1, and this will continue until we hit 0
      return n * factorial(n - 1);
    };
};