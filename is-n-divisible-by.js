// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

function isDivisible(){
  // We'll start by storing the first value of the arguments in a variable, 'num'
  let num = arguments[0];
  // Next, we'll use a for-loop to iterate over the arguments
  for(let i = 0; i <= arguments.length - 1; i++) {
    // Inside the loop we'll have an if-conditional checking to see if 'num' is
    // divisible by the current value of the loop. If it isn't, we'll return
    // false
    if(num % arguments[i] !== 0) {
      return false;
    };
  };
  // We'll return true if we're able to make it through the loop, because
  // that will mean 'num' is divisible by every number
  return true;
};