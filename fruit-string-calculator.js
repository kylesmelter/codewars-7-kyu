// You are given a string of words and numbers. Extract the expression including:

// the operator: either addition ("gains") or subtraction ("loses")
// the two numbers that we are operating on
// Return the result of the calculation.

// Notes:

// "loses" and "gains" are the only two words describing operators
// No fruit debts nor bitten apples = The numbers are integers and no negatives
// Examples
// "Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40
// Should be a nice little kata for you :)

function calculate(string) {
    // We'll start by separating the numbers from 'string' by turning it into an array, and then
    // using .filter()
    let numbers = string.split(' ').filter(x => x[0] >= '0' && x[0] <= '9').map(x => Number(x));
    // Now we'll separate 'gains' or 'loses' from 'string' by again turning it into an array and then
    // using .filter()
    let operator = string.split(' ').filter(x => x === 'gains' || x === 'loses');
    // Now we'll use a ternary operator to see if we should add or subtract based on the value of
    // 'operator'
    return operator[0] === 'gains' ? numbers[0] + numbers[1] : numbers[0] - numbers[1];
};