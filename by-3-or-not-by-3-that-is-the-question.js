// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

function divisibleByThree(str){
    // We'll by using .split('') on the parameter, 'str,' so we can turn it into
    // an array, and then we'll use .map(Number) to turn numbers as strings into
    // integers, and then we'll use .reduce() to add them all together
    let sum = str.split('').map(Number).reduce((acc,c) => acc + c, 0);
    // Then, we'll use an if-conditional to see if 'sum' is divisible by 3. If it
    // is we'll return true. If not, false
    if(sum % 3 === 0) {
      return true;
    } else {
      return false;
    };
};