// DESCRIPTION:
// The national go-kart racing competition is taking place at your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

// Remember a classic racing podium has three platforms for first, second and third place. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

// The organizers want a podium that satisfies:

// The first place platform has the minimum height possible
// The second place platform has the closest height to first place
// All platforms have heights greater than zero.
// Task
// Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.

// Examples (input -> output)
// 11 ->   [4, 5, 2]
// 6  ->   [2, 3, 1]
// 10 ->   [4, 5, 1]

function racePodium(blocks) {
    // We'll first create an array, podium, with initial values set to 0 for all three platforms. 
    // We can use indexing to change them to whatever value we need to
    let podium = [0, 0, 0,];
    // We'll set podium[1] (first place) equal to the number of blocks divided by 3 (rounded up using Math.ceil), and then
    // adding 1
    podium[1] = Math.ceil(blocks / 3) + 1;
    // Next we'll create a special case where if there are only 3 blocks left after subtracting the amount of blocks
    // needed for the first place platform from our total number of blocks, our second place platform (podium[0]) will be equal
    // to 2, and our third place platform (podium[2]) will be equal to 1. We'll then return our podium array
    if(blocks - podium[1] === 3) {
      podium[0] = 2;
      podium[2] = 1;
      return podium;
    } else {
    // But if we have more than 3 blocks left after subtracting the blocks needed for the first place platform from our
    // total number of blocks, our second place platform (podium[0]) will be equal to the number of blocks needed for
    // the first place platform (podium[1]) minus 1
      podium[0] = podium[1] - 1;
    };
    // That means our third place platform (podium[2]) is equal to whatever is left over!
    podium[2] = blocks - podium[1] - podium[0];
    // We'll then return our podium array
    return podium;
};