// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

// Note: This is an introductory Kata for a series... coming soon!

function reduce(fraction) {
    // We'll first create a variable that will destructure the fraction input
    let [numerator, denominator] = fraction; 
    // Then we'll create a for-loop that will start with the smallest number within our destructured array, and we'll
    // count backward to 1
    for (let i = Math.min(...fraction); i > 0; i--) {
    // Next we'll create an if-conditional that will check to see if both the numerator and denominator are divisible
    // by the value of i, and if they are we'll return the values of the numerator and denominator divided by i for
    // the next iteration
      if (numerator % i == 0 && denominator % i == 0) {
        return [numerator / i, denominator / i];
      };
    };
};