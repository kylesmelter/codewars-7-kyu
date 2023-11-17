// Is the number even?
// If the numbers is even return true. If it's odd, return false.

// Oh yeah... the following symbols/commands have been disabled!

// use of %
// use of .even? in Ruby
// use of mod in Python

var isEven = function (n) { //if n is even return true, otherwise, return false
    // We'll start by creating a while-loop to help us count down
    while(n > 0) {
      // Inside the loop, we'll subtract 2 from 'n' with each iteration
      n -= 2;
      // Next, we'll have a couple if-conditionals to make sure we return the correct answer
      if(n === 0) {
        return true;
      };
      
      if(n === 1 || n < 0) {
        return false;
      };
    };
};