// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//       * "ONE", "TWO"  -> "TWO"`
//       * "ONE", "NEO"  -> "Tie!"

function battle(x, y) {
  // We'll start by creating variable that will keep track of the score for
  // each parameter
  let xResult = 0;
  let yResult = 0;
  // Next, we'll use a for-loop to iterate over 'x'
  for(let i = 0; i <= x.length - 1; i++) {
    // Inside the loop we'll use the .charCodeAt() method while also
    // subtracting 64 from the current letter's code (this will set 'A' 
    // equal to 1, 'B' equal to 2, etc.)
    xResult += x[i].charCodeAt() - 64;
  };
  // Now we'll use another for-loop to iterate over 'y'
  for(let i = 0; i <= y.length - 1; i++) {
    yResult += y[i].charCodeAt() -64;
  };
  // Finally, we'll use an if-statement to see who the winner is!
  if(xResult > yResult) {
    return x;
  } else if(xResult === yResult) {
    return 'Tie!'
  } else {
    return y;
  };
};