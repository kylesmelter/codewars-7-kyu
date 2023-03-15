// DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the 
// strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    // We'll use the filter method to return an array where the type of the variable entered is a number, and is also >= 0, and
    // we're done!
    return l.filter(x => typeof x === 'number' && x >= 0);
};