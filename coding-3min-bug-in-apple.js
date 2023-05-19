// DESCRIPTION:
// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.

// Task:
// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]

function sc(apple){
    // We'll start by creating an empty variable, 'holder,' that will later store the array
    // with the bug in it
    let holder;
    // Next, we'll create another variable, 'result,' that will be an empty array to hold the
    // values we'll need to return
    let result = [];
    // Then we'll create a for-loop to iterate through the input array
    for(let i = 0; i <= apple.length - 1; i++) {
      // If the current value (current array) includes 'B', we'll set our 'holder' variable
      // equal to that current array. We'll also push the index of that array to our 'result'
      // variable
      if(apple[i].includes('B')) {
        holder = apple[i];
        result.push(i);
      };
    };
    // Next, we'll create another for-loop to iterate through our new 'holder' array
    for(let i = 0; i <= holder.length - 1; i++) {
      // Inside the loop we'll have another if-conditional to check if the current value
      // === 'B,' and if it does we'll push the value of i to our 'result' variable
      if(holder[i] === 'B') {
        result.push(i);
      };
    };
    // Now we just return 'result!'
    return result;
};