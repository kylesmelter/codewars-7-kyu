// In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

// If a letter is a upper case consonants, replace that character with "Iron".
// If a letter is a lower case consonants or a non-alpha character, do nothing to that character
// If a letter is a upper case vowel, replace that character with "Iron Yard".
// If a letter is a lower case vowel, replace that character with "Yard".

function tiyFizzBuzz(sentence){
    // Let's start by creating an emtpy string, 'result,' that we can push
    // our new values to
    let result = '';
    // Next, we'll create an array, 'uppercaseConsonants,' that will store all 
    // the uppercase versions of every consonant
    let uppercaseConsonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
                              'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
    
    // Then, we'll create another array, 'uppercaseVowels,' that will store all
    // the uppercase versions of every vowel
    let uppercaseVowels = ['A', 'E', 'I', 'O', 'U'];
    
    // We'll create one more array, 'lowercaseVowels,' that will store all the
    // lowercase versions of every vowel
    let lowercaseVowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Now, we'll create a for-loop that will iterate over the parameter, 'sentence'
    for(let i = 0; i <= sentence.length - 1; i++) {
      // Inside the for-loop we'll have an if-conditional in combination with
      // the .includes() method to decide what we add to 'result'
      if(uppercaseConsonants.includes(sentence[i])) {
        result += 'Iron';
      } else if(uppercaseVowels.includes(sentence[i])) {
        result += 'Iron Yard';
      } else if(lowercaseVowels.includes(sentence[i])) {
        result += 'Yard';
      } else {
        result += sentence[i];
      };
    };
    // Now we just need to return 'result!'
    return result;
};