// DESCRIPTION:
// This Kata is intended as a small challenge for my students

// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""

var removeVowels = function(str){
    // Let's first start by creating a string that contains every vowel
    let vowels = 'aeiou';
    // Next we'll create an empty string, result, to += our values to
    let result = '';
    // Then we'll create a for-loop to iterate over the input, str
    for(let i = 0; i <= str.length - 1; i++) {
      // If the current value is included in our 'vowels' string, we'll continue over it and
      // not include it in our 'result' variable
      if(vowels.includes(str[i])) {
        continue;
      } else {
        // If the current value isn't included in 'vowels,' we'll += it to our 'result' variable
        result += str[i];
      };
    };
    // All we need to do now is return 'result!'
    return result;
};