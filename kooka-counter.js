// A family of kookaburras are in my backyard.

// I can't see them all, but I can hear them!

// How many kookaburras are there?

// Hint
// The trick to counting kookaburras is to listen carefully

// The males sound like HaHaHa...

// The females sound like hahaha...

// And they always alternate male/female

// Examples
// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3

var kookaCounter = function(laughing) {
    if(laughing.length === 0) {
      return 0;
    };
  
    let count = 1;

    let array = [];

    for(let i = 0; i <= laughing.length - 1; i += 2) {
        array.push(laughing[i] + laughing[i + 1]);
    };

    for(let i = 1; i <= array.length - 1; i++) {
        if(array[i] === array[i - 1]) {
            continue;
        } else {
            count++;
        };
    };
    return count;
};