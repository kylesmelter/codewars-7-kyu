// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, 
// where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array){
    // Let's start by creating two (one for each team) empty arrays
    let team1 = [];
    let team2 = [];
    // Then we'll sort the array values into each team. If the index of the value is even, that value will be pushed to team 1,
    // and if the index of the value is odd that value will be pushed to team 2
    for(let i = 0; i <= array.length - 1; i++) {
      if(i % 2 === 0) {
        team1.push(array[i]);
      } else {
        team2.push(array[i]);
      };
    };
    // Now, we'll find the sum of each team using the reduce method
    let sum1 = team1.reduce((acc,c) => acc + c, 0);
    let sum2 = team2.reduce((acc,c) => acc + c, 0);
    // Finally, we'll return the summed values in an array!
    return [sum1, sum2];
};