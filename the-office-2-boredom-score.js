// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){
    // We'll start by creating a variable, score, to keep track of boredom points
      let score = 0;
    // Next, we'll take the input object and turn it into an array so we can iterate over
    // it using Object.entries()
      let array = Object.entries(staff);
    // Now we'll use a for-loop to iterate over the created array, 'array'
      for(let i = 0; i <= array.length - 1; i++) {
        // Inside we'll have an if-conditional to add the applicable amount of points
        // to our 'score' variable based on the department
          if(array[i][1] === 'accounts') {
              score += 1;
          } else if(array[i][1] === 'finance') {
              score += 2;
          } else if(array[i][1] === 'canteen') {
              score += 10;
          } else if(array[i][1] === 'regulation') {
              score += 3;
          } else if(array[i][1] === 'trading') {
              score += 6;
          } else if(array[i][1] === 'change') {
              score += 6;
          } else if(array[i][1] === 'IS') {
              score += 8;
          } else if(array[i][1] === 'retail') {
              score += 5;
          } else if(array[i][1] === 'cleaning') {
              score += 4;
          } else if(array[i][1] === 'pissing about') {
              score += 25;
          };
      };
    // Lastly, we'll have another if-conditional to figure out which option to return
      if(score <= 80) {
          return 'kill me now';
      } else if(score > 80 && score < 100) {
          return 'i can handle this';
      } else {
          return 'party time!!';
      };
};