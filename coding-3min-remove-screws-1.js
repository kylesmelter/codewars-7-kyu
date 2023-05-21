// John is a worker, his job is to remove screws from a machine. There are 2 types of screws: slotted (-) and cross (+). John has two screwdrivers, one for each type of screw.

// The input will be a (non-empty) string of screws, e.g. : "---+++"

// When John begins to work, he stands at the first screw, with the correct screwdriver in his hand, and another in his tool kit. He works from left to right, removing every screw. When necessary, he switches between the screwdriver in his hand and the one in his tool kit.

// Each action takes a set amount of time:

// remove one screw : 1 second
// move to the next screw: 1 second
// switch screwdrivers: 5 seconds
// Your task is to return the total time taken to remove all the screws, in seconds.

// Examples
// In order to be more clear, we use ABCDEF to represent the screws. The number in brackets is the time in seconds:

// screws: "---+++"
//          ABCDEF

// remove A (1) + move to B (1) + remove B (1) + 
// move to C (1) + remove C (1) + move to D (1) +
// switch screwdriver (5) + remove D (1) +
// move to E (1) + remove E (1) + move to F (1) + remove F (1)

// total time = 16 seconds
// Another example:

// screws: "-+-+-+"
//          ABCDEF

// remove A (1) +
// move to B (1) + switch screwdriver (5) + remove B (1) +
// move to C (1) + switch screwdriver (5) + remove C (1) +
// move to D (1) + switch screwdriver (5) + remove D (1) +
// move to E (1) + switch screwdriver (5) + remove E (1) +
// move to F (1) + switch screwdriver (5) + remove F (1)

// total time = 36 seconds 

function sc(screws){
    // We'll first use an if-conditional to check if the length of the input === 0,
    // and if it does we'll return 0
    if(screws.length === 0) {
      return 0;
    };
    // Next, we'll create a variable, 'count,' that will create track of the number of
    // seconds, and we'll have it initially set to 1 because we're going to start at index
    // 1 in our upcoming for-loop
    let count = 1;
    // Now we'll create a for-loop so we can iterate over the input
    for(let i = 1; i <= screws.length - 1; i++) {
      // We'll first increase 'count' by 1 to start each loop, and this will be recording
      // the time it takes to move to the next screw
      count += 1;
      // Now we'll use an if-conditional to see if the current value === the previous value,
      // and if it does we'll increase 'count' by 1
      if(screws[i] === screws[i - 1]) {
        count += 1;
        // If the two values aren't equal, we'll increase 'count' by 6. 5 for switching
        // screwdrivers, and 1 for removing the screw
      } else {
        count += 6;
      };
    };
    // All we do now is return count!
    return count;
};