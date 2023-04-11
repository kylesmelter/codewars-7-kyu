// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    // Let's create a variable, 'result', that will take the absolute value of the input, 'number',
    // using Math.abs() before turning it into a string, and then splitting it to turn it into
    // an array, and then using map to turn an array of string numbers into an array of integers, 
    // and then finally using the reduce method to sum the numbers in the array
    let result = Math.abs(number).toString().split('').map(Number).reduce((acc,c) => acc + c, 0);
    // All we need to do now is return 'result!'
    return result;
};