// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
    let result = [];
    
    let array = s.toLowerCase().split('');
    
    for(let i = 0; i <= array.length - 1; i++) {
      if(array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
        result.push('1');
      } else {
        result.push('0');
      };
    };
    return result.join('');
};