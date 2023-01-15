// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let lowercase = str.toLowerCase();
    let count = 0;
    let consonants = 'bcdfghjklmnpqrstvwxyz';
    
    for(let i = 0; i <= lowercase.length - 1; i++) {
      if(consonants.includes(lowercase[i])) {
        count += 1;
      };
    };
    return count;
};