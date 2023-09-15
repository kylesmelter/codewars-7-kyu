// Description:
// Count the number of exclamation marks and question marks, return the product.

// Examples
// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20

function product (string) {
    // We'll use .split('') to turn the parameter, 'string,' into an array, and then we'll
    // use the magic of .filter() to create an array of just exclamation points, and then we'll use
    // .length to find out how many exclamation points are within the array. We'll then do the sane
    // thing for question marks, and then we'll multiply the two numbers and return the product
    return string.split('').filter(x => x === '!').length * string.split('').filter(x => x === '?').length;
};