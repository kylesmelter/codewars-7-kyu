// If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

// Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

// We want to input a word as a string, and return a list representing that word as a taco.

// Key

// all vowels (except 'y') = beef

// t = tomato

// l = lettuce

// c = cheese

// g = guacamole

// s = salsa

// NOTE
// We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

// Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

// Note that no matter what ingredients are passed, our taco will always have a shell.

function tacofy(word) {
    // We'll first start by turning the parameter, 'word,' to all lowercase
    // letters in case they aren't already using .toLowerCase()
    word = word.toLowerCase();
    // Next, we'll create an array, 'result,' with a value of 'shell' to account
    // for the shell at the beginning of the taco
    let result = ['shell'];
    // Then, we'll create another array, 'vowels,' that will store every vowel
    // so we can more easily check for them using the .includes() method in our
    // upcoming if-conditional
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    // Now, we'll create a for-loop to iterate over 'word'
    for(let i = 0; i <= word.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if the 
      // current value === any of the ingredient values, and if it does we'll 
      // use .push() to push the applicable ingredient to our 'result' array
      if(vowels.includes(word[i])) {
        result.push('beef');
      } else if(word[i] === 't') {
        result.push('tomato');
      } else if(word[i] === 'l') {
        result.push('lettuce');
      } else if(word[i] === 'c') {
        result.push('cheese');
      } else if(word[i] === 'g') {
        result.push('guacamole');
      } else if(word[i] === 's') {
        result.push('salsa');
      };
    };
    // At the end, we'll use the .push() method to push the second 'shell' to our
    // 'result' array to close it off
    result.push('shell');
    // Now all we need to do is return 'result!'
    return result;
};