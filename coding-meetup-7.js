// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
// your function should return the following array:

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
// Notes:

// The input array will always be valid and formatted as in the example above and will never be empty.

function findSenior(list) {
    // We'll start by creating an empty array, 'ages,' that will store the age
    // of every developer
    let ages = [];
    // Next, we'll iterate over the parameter, 'list,' so we can use .push() to
    // push the age of every developer to our array, 'ages'
    for(let i = 0; i <= list.length - 1; i++) {
      ages.push(list[i].age);
    };
    // Then, we'll use .sort() to sort 'ages' from greatest to least
    ages = ages.sort((a,b) => b - a);
    // Lastly, we'll use .filter() on 'list' to return each developer who's 
    // the same age as the first number in our sorted 'ages' array
    return list.filter(x => x.age === ages[0]);
};