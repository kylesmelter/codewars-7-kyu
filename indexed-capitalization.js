// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

function capitalize(s,arr){
    // Let's start off by creating a variable, 'result,' and set it equal to an empty string
    let result = '';
    // Then we'll create a for loop that loops through the string parameter
    for(let i = 0; i <= s.length - 1; i++) {
      // Next we'll create an if conditional that will check if the array parameter includes the value of i, and if it does
      // we'll take the current value of the string we're looping through, and add an uppercase version of it to our result
      // string  
      if(arr.includes(i)) {
        result += s[i].toUpperCase();
      } else {
      // If the array doesn't include the value of i, we'll just add the current value of the string to our result variable   
        result += s[i];
      };
    };
    // Now we just need to return our result string, and we're done!
    return result;
};