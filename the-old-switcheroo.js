// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

function vowel2index(str) {
    // We'll first create an array that will hold every vowel in both uppercase and
    // lowercase. This will allow us to use to the .includes() method rather than
    // a messy if-conditional
     let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    // Next we'll create an empty array that will store our new values
    let result = [];
    // Now we'll create a for-loop so we can iterate over our 'str' input
    for(let i = 0; i <= str.length - 1; i++) {
      // Inside the for-loop we'll create a simple if-conditional that will check if
      // our 'vowels' array includes the current value of the loop, and if it does we'll
      // use the .push() method to push the value of i + 1 to our 'result' array. If our
      // 'vowels' array doesn't include the current value of the loop we'll simply use
      // the .push() method to add the current value of the loop to our 'result' array
      if(vowels.includes(str[i])) {
        result.push(i + 1);
      } else {
        result.push(str[i]);
      };
    };
    // All we need to do now is use the .join() method on our 'result' array to turn it
    // from an array into a string and return it
    return result.join('');
};