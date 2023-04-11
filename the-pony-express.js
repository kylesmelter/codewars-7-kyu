// A History Lesson
// The Pony Express was a mail service operating in the US in 1859-60.

// Pony Express
// It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.

// How it worked
// There were a number of stations, where:

// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.

function riders(stations) {
    // We'll start by creating counter variables for the number of riders, riders, and the
    // count of miles, count
    let riders = 1;
    let count = 0;
    // Then we'll use a for-loop to iterate over the array of miles numbers, stations
    for(let i = 0; i <= stations.length - 1; i++) {
    // Inside the loop we'll have an if-conditional that will help us keep track of the
    // miles. If 'count' is <= 100, we'll add the current value of the loop to 'count'
      if(count + stations[i] <= 100) {
        count += stations[i];
    // If the current value would push 'count' over 100, we'll add 1 to our 'riders' variable
    // and set our 'count' variable = to the current value
      } else {
        riders += 1;
        count = stations[i];
      };
    };
    // All we need to do now is return our 'riders' variable!
    return riders;
};