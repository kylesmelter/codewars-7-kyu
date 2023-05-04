// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    // First we'll create a variable, 'count,' that will keep track of the number
    // of vowels
    let count = 0;
    // Next we'll create a string, 'vowels,' that will hold every vowel, and we'll use
    // it so we can avoid using a lengthy if-statement
    let vowels = 'aeiou';
    // Then we'll turn the string input into lowercase values so they'll match
    // the vowels within our string variable, 'vowels'
    let lowercase = str.toLowerCase();
    // Now we'll create a for-loop to iterate over the string input
    for(let i = 0; i <= lowercase.length - 1; i++) {
      // If our 'vowels' variable includes the current value, we'll add one to our counter
      if(vowels.includes(lowercase[i])) {
        count += 1;
      };
    };
    // All we need to do now is return our counter variable!
    return count;
};