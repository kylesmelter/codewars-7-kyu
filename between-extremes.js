// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

function betweenExtremes(numbers) {
    // We'll start by sorting the input array, numbers, into a new array, sorted, so we
    // can easily find the smallest and largest numbers
    let sorted = numbers.sort((a,b) => a - b);
    // Then all we need to do is subtract the first value in the array from the last value
    // in the array
    return sorted[sorted.length - 1] - sorted[0];
};