// Description
// For this Kata you will need to create a function which works out the score of a dive in an Olympic diving competition and displays it in the correct format. The function will take 2 arguments:

// An array of numbers representing the judges' scores, called scores
// A number representing the degree of difficulty of the dive, called tariff
// The 2 lowest and 2 highest scores by the judges are discarded and the 3 remaining scores are added together. The result of this is then multiplied by the difficulty ( tariff ) to get the score for the dive.

// https://www.britannica.com/story/how-is-diving-scored

// The answer should be a string, and should always have exactly 2 digits after the decimal point, as this is how diving scores are displayed.

// Note
// The scores will only contain numbers between 0 and 10 and the tariff will always be greater than 0.

// Example
// scoreOfDive( [ 7, 7.5, 8, 7.5, 6, 7, 7 ], 3 )  =>  '64.50'

function scoreOfDive(scores, tariff) {
    // We'll find the score by first using .sort() to sort the parameter, 'scores,' from smallest
    // to largest, and then we'll use .slice() to grab the middle 3 scores, and then we'll use
    // .reduce() to add the 3 scores together, and then we'll multiply that number by the value
    // for tariff
    let judgedScore = scores.sort((a,b) => a - b).slice(2, 5).reduce((acc,c) => acc + c, 0) * tariff;
    // Now we'll use .toFixed() to return the number to 2 decimal places
    return judgedScore.toFixed(2);
};