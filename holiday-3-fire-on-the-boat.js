// DESCRIPTION:
// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

function fireFight(s){
    // Let's start by creating an empty array we can push our values to
    let result = [];
    // Next we'll use the .split() method to turn the input string into an array
    let array = s.split(' ');
    // Then we'll use a for-loop to iterate over our newly created array
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will check tyo see if the current value
      // === 'Fire,' and if it does we'll use the .push() method to add '~~' to our 'result' array
      if(array[i] === 'Fire') {
        result.push('~~');
      } else {
      // If the current value !== "Fire," we'll push the current value to our 'result' array
        result.push(array[i]);
      };
    };
    // All that's left to do is use the .join() method to turn our 'result' array into a string
    // and return it!
    return result.join(' ');
};