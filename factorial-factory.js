// In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

// You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

// Note: 0! is always equal to 1. Negative values should return null;

function factorial (n) {
    // We'll start off by checking to see if n is equal to 0 or 1, and if it is we'll return 1
    if(n === 0 || n === 1) {
      return 1;
    // Then we'll see if n is less than 0, and if it is we'll return null
    } else if(n < 0) {
      return null;
    // Next, we'll use some recursion and set n equal to n multiplied by our factorial function
    // with a parameter of n - 1    
    } else {
      n = n * factorial(n - 1);
    };
    // All that's left to do is return n!
    return n;
};