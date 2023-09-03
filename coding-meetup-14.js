// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//     meal: 'vegetarian' },
// ];
// your function should return the following object (the order of properties does not matter):

// { vegetarian: 2, standard: 1, vegan: 1 }
// Notes:

// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

function orderFood(list) {
    // We'll start by creating a cache object, 'foodChoices,' that will store
    // the choices for each food
    let foodChoices = {};
    // Next, we'll create a for-loop to iterate over the parameter, 'list'
    for(let i = 0; i <= list.length - 1; i++) {
      // Inside the loop we'll create a variable, 'current,' that will be store
      // the food choice for current developer
      let current = list[i].meal;
      // Next, we'll add 1 to the current food choice if it's already found
      // in 'foodChoices,' or we'll set it equal to 1
      foodChoices[current] = foodChoices[current] + 1 || 1;
    };
    // All we do now is return foodChoices!
    return foodChoices;
};