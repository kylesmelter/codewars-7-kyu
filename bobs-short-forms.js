// Bob is a theoretical coder - he doesn't write code, but comes up with theories, formulas and algorithm ideas. You are his secretary, and he has tasked you with writing the code for his newest project - a method for making the short form of a word. Write a function shortForm(C# ShortForm, Python short_form) that takes a string and returns it converted into short form using the rule: Remove all vowels, except for those that are the first or last letter. Do not count 'y' as a vowel, and ignore case. Also note, the string given will not have any spaces; only one word, and only Roman letters.
// Example:

// shortForm("assault");
// short_form("assault")
// ShortForm("assault");
// // should return "asslt"


// Also, FYI: I got all the words with no vowels from
// https://en.wikipedia.org/wiki/English_words_without_vowels

function shortForm(str) {
  // We'll start by creating an array, 'vowels,' that will store upper- and
  // lowercase versions of each vowel
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // Next, we'll create an empty array to push our values to
  let result = [];
  // Then, we'll create a for-loop to iterate over the parameter, 'str'  
  for(let i = 1; i <= str.length - 2; i++) {
    // Inside the loop we'll have an if-conditional checking to see if
    // the current value of the loop is found within 'vowels' using the
    // .includes() method, and if it does we'll continue past it. If it 
    // doesn't we'll use .push() to add it to our 'result' array
    if(vowels.includes(str[i])) {
      continue;
    } else {
      result.push(str[i]);
    };
  };
  // Once we're done with the loop we'll use the .unshift() and .push() methods
  // combined with the .slice() method to add the first and last values to our
  // result array in case they're vowels
  result.unshift(str.slice(0,1));
  result.push(str.slice(-1));
  // All we need to do now is use the .join('') method on our 'result' array
  // and return it
  return result.join('');
};