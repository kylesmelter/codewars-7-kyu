// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    // We'll start by creating an array from the input, 'numbers,' and then using the
    // .trim() method to eliminate any empty spaces
    let array = numbers.trim().split(' ');
    
    // Next we'll create the variable, 'sorted,' that will sort the values in
    // ascending order
    let sorted = array.sort((a,b) => a - b);
    // All we need to do now is return the first and last values in a string!
    return sorted[sorted.length - 1] + ' ' + sorted[0];
};