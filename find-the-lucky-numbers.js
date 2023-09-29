// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

// For example,

// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]
// Don't worry about bad input, you will always receive a finite list of integers.

function filterLucky(array) {
    // We'll use .filter() to create an array, and we'll use .toString() and
    // .includes() to make sure every number included in that array contains
    // the number 7
    return array.filter(x => x.toString().includes('7'));
};