// DESCRIPTION:
// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

function outed(meet, boss){
    // First we'll create a counter to keep track of the total amount of points
    let rating = 0;
    // Next we'll create a for-in loop so we can iterate over the input object
    for(let key in meet) {
      // Inside our loop we'll create an if-conditional to check for the boss score.
      // If our key while looping === the boss name we'll multiply its value by 2
      // before we add it to our 'rating' variable
      if(key === boss) {
        rating += meet[key] * 2;
      } else {
      // Else, we'll just add the value to our 'rating' vatiable
        rating += meet[key]; 
      };
    };
    // Then we'll take the value of our 'rating' variable and divide it by the amount
    // of values within the object to get our final score
    rating = rating / Object.values(meet).length;
    // Lastly, we'll create another if-conditional to check if our final score <= 5
    if(rating <= 5) {
      return 'Get Out Now!';
    } else {
      return 'Nice Work Champ!';
    };
};