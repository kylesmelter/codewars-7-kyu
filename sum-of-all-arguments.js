// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

function sum() {
    let result = 0;
    
    for(let i = 0; i <= arguments.length - 1; i++) {
      result += arguments[i];
    };
    
    return result;
};