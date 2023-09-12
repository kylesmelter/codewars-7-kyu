// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

function countLanguages(list) {
    // We'll start by creating an object, 'result,' that will store the languages and the count for each
    let result = {};
    // Next, we'll use a for-loop to iterate over the parameter, 'list'
    for(let i = 0; i <= list.length - 1; i++) {
      // Inside the loop we'll create a variable, 'current,' that will store the language of the current
      // value
      let current = list[i].language;
      // If the value of 'current' (i.e. the language for the current developer) can already be found
      // within 'result' we'll add 1 to that value. If it isn't, we'll create a key for that language
      // with its value set to 1
      result[current] = result[current] + 1 || 1;
    };
    // Now we just need to return 'result!'
    return result;
};