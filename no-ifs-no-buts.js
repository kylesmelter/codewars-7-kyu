// DESCRIPTION:
// Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

// (5, 4)   ---> "5 is greater than 4"
// (-4, -7) ---> "-4 is greater than -7"
// (2, 2)   ---> "2 is equal to 2"
// There is only one problem...

// You cannot use if statements, and you cannot use the ternary operator ? :.

// In fact the word if and the character ? are not allowed in your code.

function noIfsNoButs(a, b) {
    // We'll be sneaky and use while loops! To start, while a > b, we'll use
    // template literals to help us return the value of a is greater than the
    // value of b
    while(a > b) return `${a} is greater than ${b}`;
    // Our next case is if a < b, and we'll again use template literals to return
    // the value of a is smaller than the value of b
    while(a < b) return `${a} is smaller than ${b}`;
    // Our last case is if a === b, and, you guessed it, we'll use template literals
    // to help us return the value of a is eqaul to the value of b
    while(a === b) return `${a} is equal to ${b}`;

};