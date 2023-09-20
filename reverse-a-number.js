// DESCRIPTION:
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
    // We'll use an if-conditional to see if the parameter, 'n,' is negative, and if it is we'll use
    // '-' and .slice(1) to make sure we reverse the number without reversing the '-' sign, and then
    // we'll add the '-' sign at the beginning. Otherwise, we'll just turn the parameter into a string,
    // then an array, then reverse it, then turn it back into a string, and wrap it in a '+' so it returns
    // as a number
    if(n.toString()[0] === '-') {
      return +('-' + n.toString().slice(1).split('').reverse().join(''));
    } else {
      return +(n.toString().split('').reverse().join(''));
    };
};