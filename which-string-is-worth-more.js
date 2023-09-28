// You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

// A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

// In the event of a tie, you should return the first string, i.e. a.

function highestValue(a, b) {
    // We'll start by creating variables that will hold the score of each parameter
    let scoreA = 0;
    let scoreB = 0;
    // Next, we'll use the .map() and .charCodeAt() methods to grab the ASCII values of each letter
    // and add them to the running totals for each applicable string
    a.split('').map(x => {
      scoreA += x.charCodeAt();
    });
    
    b.split('').map(x => {
      scoreB += x.charCodeAt();
    });
    // Lastly, we'll use an if-statement to decide which string to return
    if(scoreA >= scoreB) {
      return a;
    } else {
      return b;
    };
};