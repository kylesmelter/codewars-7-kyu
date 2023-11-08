// Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// Courtesy of FreeCodeCamp, a great place to learn web-dev; plus, its founder Quincy Larson is pretty cool and amicable. I made the original one slightly more tricky ;)

function uniteUnique() {
    // First, we'll make sure we have an array by using Array.from(), and then we'll use .flat() to
    // get rid of any nested arrays
    let array = Array.from(arguments).flat();
    // Next, we'll create a Set which will eliminate any duplicates
    let set = new Set(array);
    // Then we'll turn 'set' back into an array
    set = [...set];
    // All we need to do now is return 'set!'
    return set;
};