// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!

const sumSquareEvenRootOdd = ns => {
    // We'll start by creating a variable, 'count,' that will be the sum of our values
    let count = 0;
    // Next we'll create a for-loop to iterate over the input array, 'ns'
    for(let i = 0; i <= ns.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will add the square of the current
      // value to our 'count' variable if the current value is even, and the square root of
      // the current value if it's odd
      if(ns[i] % 2 === 0) {
        count += Math.pow(ns[i], 2);
      } else {
        count += Math.sqrt(ns[i]);
      };
    };
    // Now we just need to use the .toFixed() method to make sure we return 'count' with 
    // 2 decimal places
    return Number(count.toFixed(2));
};