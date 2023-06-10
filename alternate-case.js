// Write function alternateCase which switch every letter in string from 
//upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    // Let's start by creating an empty string we can add our new values to
    let result = '';
    // Next, we'll create a for-loop to iterate over the input, 's'
    for(let i = 0; i <= s.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will check to see if the current
      // value === an uppercase or lowercase version of itself, and then we'll add the 
      // opposite of whatever it is to our string, 'result'. If it's neither, we'll simply
      // add the current value to 'result'
      if(s[i] === s[i].toUpperCase()) {
        result += s[i].toLowerCase();
      } else if(s[i] === s[i].toLowerCase()) {
        result += s[i].toUpperCase();
      } else {
        result += s[i];
      };
    };
    // All we need to do now is return 'result!'
    return result;
};