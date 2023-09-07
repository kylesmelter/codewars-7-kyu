// Prince Arthas needs your help! Mal'ganis has spread an infection amongst the Stratholme citizens, and we must help Arthas prevent this infection from spreading to other parts of the Kingdom.

// You will receive a string s as input: Each "word" represents a house, and each letter represents a citizen. All infected citizens are represented as "i" or "I" in s. You must eradicate them, and their neighbors. If an infected citizen appears after or before a space, you should not delete the space, but keep in mind that the distance from "house" to "house" (word to word) has to have only one space.

// EXAMPLES:

// "STRING"                       -> "STG"
// "1i2 33 i4i5 i555ii5"          -> "33 5"
// "It is a bit chilly"           -> "a cly"
// "Pineapple pizza is delicious" -> "eapple za deus"
// "It is not there"              -> "not there"
// NOTES:

// There are no apostrophes or any non-alphanumeric characters other than spaces.
// Make sure there are no leading or trailing spaces in the result string
// You will always be given a valid string.
// You won't be provided any empty strings.
// Good luck and for the Alliance!

function purifyTheStratholme(s) {
    // We'll start by creating an empty string variable, 'result,' that we'll add our values to
    // while looping
    let result = '';
    
    // Next, we'll create a for-loop to iterate over the parameter, 's'
    for(let i = 0; i <= s.length - 1; i++) {
      // Inside the loop we'll use an if-conditional to make sure we don't add any i's, I's, or values
      // surrounding i's or I's to our 'result' string
      if(s[i] === 'i' || s[i] === 'I' || s[i + 1] === 'i' || s[i + 1] === 'I' || s[i - 1] === 'i' || s[i - 1] === 'I') {
        continue;
      } else {
        result += s[i];
      };
    };
    // Now we'll use .trim() to remove any spaces at the beginning or end of 'result' and return it!
    return result.trim();
};