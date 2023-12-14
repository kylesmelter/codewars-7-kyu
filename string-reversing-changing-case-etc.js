// Given 2 string parameters, show a concatenation of:

// the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@
// the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
// ** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**

function reverseAndMirror(s1,s2) {
    // We'll start by creating two new variables that will store the values of our new strings
    // after looping through the originals
    let newS1 = '';
    let newS2 = '';
    // Next, we'll create a for-loop to iterate over s1
    for(let i = 0; i <= s1.length - 1; i++) {
      // Inside the loop we'll have an if-conditional set up to change lowercase to uppercase, 
      // and vice-versa
      if(s1[i] === s1[i].toLowerCase()) {
        newS1 += s1[i].toUpperCase();
      } else if(s1[i] === s1[i].toUpperCase()) {
        newS1 += s1[i].toLowerCase();
      };
    };
    // Now, we'll reverse newS1, and then add newS1 before the reverse to the reversed version
    newS1 = newS1.split('').reverse().join('') + newS1;
    // And we'll repeat the same for s2
    for(let i = 0; i <= s2.length - 1; i++) {
      if(s2[i] === s2[i].toUpperCase()) {
        newS2 += s2[i].toLowerCase();
      } else if(s2[i] === s2[i].toLowerCase()) {
        newS2 += s2[i].toUpperCase();
      };
    };
    // Next, we'll reverse newS2
    newS2 = newS2.split('').reverse().join('');
    // Now all we need to do is return the two new strings with '@@@' in the middle!
    return newS2 + '@@@' + newS1;
};