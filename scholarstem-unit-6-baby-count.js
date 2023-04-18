// DESCRIPTION:
// A local birthing center is interested in names!

// They have arrays of all the baby names they see each year, but the lists are sooo long! They don’t know how to calculate how many times one name is used.

// Given an array of names and a specific name string, return the number of times that specific name appears in the array.

// countName( ["Tom","Bob","Harry","Bob"] , "Bob") //should return 2, since "Bob" shows up 2 times in the array

function countName(anArr, name){
    // We'll start by creating a counter that will keep track of the amount of times the input,
    // name, appears
    let count = 0;
    // Then we'll create a for-loop to iterate over the input array, anArr
    for(let i = 0; i <= anArr.length - 1; i++) {
      // Inside the loop we'll have an if-conditional so we can compare the current value of
      // the loop to the input, name. If they're === to each other, we'll add 1 to our 'count'
      // variable
      if(anArr[i] === name) {
        count++;
      };
    };
    // All we need to do now is return 'count!'
    return count;
};