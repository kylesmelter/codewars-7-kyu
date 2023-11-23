// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


// Example:

// [10,10,10,18,20,20] --> 12

function passed (list) {
    // We'll start by creating an array using .filter() that includes scores of 18
    // and lower
    let array = list.filter(x => x <= 18);
    // If the length of 'array' is less than 1, we'll return 'No pass scores registered.'
    if(array.length < 1) {
      return 'No pass scores registered.';
    };
    // Next, we'll figure out the average using .reduce() and dividng that number
    // by the length of 'array'
    let result = array.reduce((acc, c) => acc + c, 0) / array.length;
    // Lastly, we'll return the score as an integer and use .toFixed() to not any
    // decimal places
    return +result.toFixed(0)
}; 