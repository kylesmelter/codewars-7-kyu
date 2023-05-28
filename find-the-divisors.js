// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors
//(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 
//(null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
    // We'll first create an empty array, 'result,' to add our values to
    let result = [];
    // Then we'll create a for-loop that will start at 2--being 1 doesn't count--and run
    // until integer - 1
    for(let i = 2; i < integer; i++) {
      // Inside the loop we'll have an if-conditional using the remainder operator
      // checking to see if 0 is left over after dividing integer by i, and if it is
      // we'll use the .push() method to add the value of i to our 'result' array
      if(integer % i === 0) {
        result.push(i);
      };
    };
    // At the end we'll have another if-conditional checking the length of 'result.'
    // If the length is === 0 we know integer is a prime number without any divisors
    if(result.length === 0) {
      return `${integer} is prime`;
    } else {
      return result;
    };
  };