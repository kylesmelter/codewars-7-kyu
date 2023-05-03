
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
    // We'll first start by creating an array from the input string so we can
    // use the magic of Sets
    let array = s.split(' ');
    // Next we'll create a new Set on our created array because Sets will
    // remove all duplicates after the first occurrence
    let set = new Set(array);
    // Now all we need to do is use the spread operator on our Set to turn
    // it back into an array, and then use the .join() method to turn it back
    // into a string
    return [...set].join(' ');
};