// DESCRIPTION:
// Implement a function to calculate the sum of the numerical values in a nested list. For example :

// sumNested([1, [2, [3, [4]]]]) => 10

const sumNested = arr => {
    // All we have to do is flatten the array, and use 'Infinity' to flatten the entire array 
    // no matter how nested it is, and then use the reduce method to sum the values
    return arr.flat(Infinity).reduce((acc, c) => acc + c, 0);
};