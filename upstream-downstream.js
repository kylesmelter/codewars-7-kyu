// Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

// Input

// You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

// Output

// The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.

function time(distance,boatSpeed,stream) {
    // We'll start by splitting stream into an array so we can more easily
    // access the values
    stream = stream.split(' ');
    
    // Next we'll use an if-conditional to calculate 'boatSpeed'
    if (stream[0] === "Downstream") {
      boatSpeed += stream[1] * 1;
    } else {
      boatSpeed -= stream[1] * 1;
    };
    // Now all we need to do is return 'distance' divided by 'boatSpeed' and
    // use the .toFixed(2) method to make sure we only return the value to 2
    // decimal places
    return Number((distance/boatSpeed).toFixed(2));
};