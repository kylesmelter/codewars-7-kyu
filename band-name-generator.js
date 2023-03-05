// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them 
// together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

function bandNameGenerator(str) {
    // The first thing we'll do is create an if conditional to check if the first letter in the string equals the last
    if(str[0] === str.slice(-1)) {
    // If it does, we'll return an uppercase version of the first letter + the rest of the string + the rest of the string
    // again without the first letter    
      return str[0].toUpperCase() + str.slice(1) + str.slice(1);
  } else {
    // If it doesn't, we'll return 'The' + an empty space + an uppercase version of the first letter of the string +
    // the rest of the string
      return 'The' + ' ' + str[0].toUpperCase() + str.slice(1);
  };
};