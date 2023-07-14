// This kata is all about adding numbers.

// You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

// Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

//   add(3,4,6); 
//   /*
//   returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
//   */
// Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

// Example

//   add(); //=> 0
//   add(1,2,3); //=> 3
//   add(1,4,-6,20); //=> 6

function add() {
    // We'll first start by creating a variable, 'result,' that will keep a 
    // running total of all the values we calculate in a for-loop
    let result = 0;
    // Next, we'll create a variable, 'x,' that we'll use as our divisor
    let x = 1;
    // Then we'll create a for-loop that will iterate over the arguments
    for(let i = 0; i <= arguments.length - 1; i++) {
      // Inside the loop we'll add the current value / x to our 'result' variable
      result += arguments[i] / x;
      // At the end of the loop, we'll increment 'x' by 1
      x += 1;
    };
    // Now we'll use Math.round() to round 'result' to the nearest whole number
    // and return it!
    return Math.round(result);
};