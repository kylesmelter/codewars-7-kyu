// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to 
// write a function that will return the first n elements of the sequence with the given common difference d and first element a. 
// Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

function arithmeticSequenceElements(a, d, n) {
    // Let's start by creating an empty array we can push our values to
    let result = [];
    // Now we'll use a while loop, and we'll continue to loop through it as long as the length of our result array is less than n
    while (result.length < n) {
        // The first thing we'll do is push the value of a to our result array because the first value in the example output is the
        // starting value
        result.push(a);
        // After pushing the value of a to our result array, we'll add the value of d to a for our next trip through the loop
        a += d;
    };
    // Now we just return our joined array with a comma and a space after the comma, and we're done!
    return result.join(', ');
};