// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
// a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter so there will only be a single match for each element.

function sortArray(a1, a2) {
    // We'll start by creating an empty array, 'result,' to push our values to
    let result = [];
    // We'll then use a for-loop to iterate over the first array, 'a1'
    for(let i = 0; i <= a1.length - 1; i++) {
      // Inside the loop we'll create a variable, 'current,' to store the current
      // value of the loop
      let current = a1[i];
      // Next, we'll create another for-loop that will iterate over the second
      // array, 'a2,' while also iterating through the first array, 'a1'
      for(let j = 0; j <= a2.length - 1; j++) {
        // Inside the second loop, we'll compare the first letter of 'current'
        // with the first letter of the current value inside our loop iterating
        // through 'a2,' and if they match we'll use .push() to add the current
        // value in 'a2' to our 'result' array
        if(current[0] === a2[j][0]) {
          result.push(a2[j]);
        };
      };
    };
    // Now we just need to return 'result!'
    return result;
};