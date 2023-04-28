// DESCRIPTION:
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n){
    // We'll start with an if-conditional to see if the input is already a 
    // muktiple of 5, and if it is we'll return it
    if(n % 5 === 0) {
      return n;
    };
    // If the input isn't already a multiple of 5, we'll use a while-loop to help us find
    // the next one. As long as the input isn't a multiple of 5, we'll continue to add 1
    // to the value of the input
    while(n % 5 !==0 ) {
      n += 1;
    };
    // All we need to do after everything is return the value of n!
    return n;
};