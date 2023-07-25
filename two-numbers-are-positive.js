// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

function twoArePositive(a, b, c) {
    // We'll start by creating a variable, 'count,' to keep track of how many parameters are > 0
    let count = 0;
    // Next, we'll have if-conditionals to check if each parameter is > 0, and if they are we'll
    // add 1 to 'count'
    if(a > 0) {
      count += 1;
    };
    
    if(b > 0) {
      count += 1;
    };
    
    if(c > 0) {
      count += 1;
    };
    // One final if-conditional to check if 'count' === 2, and if it does we'll return true, if not
    // we'll return false
    if(count === 2) {
      return true;
    } else {
      return false;
    };
};