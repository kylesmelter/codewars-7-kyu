// DESCRIPTION:
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.

function isRubyComing(list) {
    // We'll start by creating a for-loop to iterate over the parameter, 'list' 
    for(let i = 0; i <= list.length - 1; i++) {
      // Inside the for-loop we'll have an if-conditional that will check to
      // see if the current value's language === 'Ruby', and if it does we'll
      // return true
      if(list[i].language === 'Ruby') {
        return true;
      };
    };
    // Down at the bottom we'll return false in case our if-conditional
    // doesn't find any developers with 'Ruby' for their language
    return false;
};