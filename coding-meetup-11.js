// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

function getAverageAge(list) {
    // We'll start by creating a variable, 'sumOfAges,' initially set to 0. This
    // we'll store the total of all the combined ages
    let sumOfAges = 0;
    // Next, we'll create a for-loop to iterate over the parameter, 'list'
    for(let i = 0; i <= list.length - 1; i++) {
      // Inside the loop, we'll grab the age of each developer and add it to our
      // 'sumOfAges' variable
      sumOfAges += list[i].age;
    };
    // All we need to do now is use Math.round() on the average so it rounds
    // correctly and return it
    return Math.round(sumOfAges / list.length);
};