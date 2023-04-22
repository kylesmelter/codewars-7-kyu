// DESCRIPTION:
// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

function broken(x){
    // We'll start by creating an empty string variable, 'result', that we can add
    // our values to
    let result = '';
    // Next we'll create a for-loop to iterate over the input string
    for(let i = 0; i <= x.length - 1; i++) {
      // Inside the loop we'll have an if-conditional to check if the current value
      // is === '1', and if it is we'll add '0' to our 'result' variable. If it's ===
      // to '0', we'll add '1' to our 'result' variable instead
      if(x[i] === '1') {
        result += '0';
      } else {
        result += '1';
      };
    };
    // All we need to do now is return 'result!'
    return result;
};