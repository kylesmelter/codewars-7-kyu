// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
    let result = [];
    
    if(string.length === 0) {
      return '';
    }
    
    for(let i = 0; i <= string.length - 1; i++) {
      if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
        result.push(string[i].toUpperCase())
      } else {
        result.push(string[i]);
      }
    }
    return result.join('');
};