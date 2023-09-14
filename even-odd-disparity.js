// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  
// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 
// The input will be an array of lowercase letters and numbers only.

// In some languages (Haskell, C++, and others), input will be an array of strings:

// solve ["0","1","2","3","a","b"] = 0 
// Good luck!

function solve(a){
    // We'll first use .filter() to create an array of only numbers
    let numbers = a.filter(x => Number(x) || x === 0);
    // We'll use .filter() again to create two arrays--one with evens, and one
    // with odds, and then we'll subtract the length of the array with odd numbers 
    // from the length of the array with even numbers and return it!
    return numbers.filter(x => x % 2 === 0).length - numbers.filter(x => x % 2 !== 0).length;
};