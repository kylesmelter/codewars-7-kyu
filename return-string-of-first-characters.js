// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

function makeString(s){
    // We'll start by turning 's' into an array
    s = s.split(' ');
    // Next, we'll create an empty string, 'result,' to add our letters to
    let result = '';
    // Now, we'll create a for-loop to iterate over 's'
    for(let i = 0; i <= s.length - 1; i++) {
      // We'll add the first letter of each current value to 'result'
      result += s[i][0];
    };
    // Now we'll return 'result!'
    return result;
};