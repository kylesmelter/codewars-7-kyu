// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

// You can assume, that the input string has always non-zero length.

// Examples: "test"   returns "e"; "teeter" returns "r"; "trend"  returns "t" (all the characters are unique)
// "aabbcc" returns null (all the characters are repeated);

function firstNonRepeated(s) {
    // First thing we'll do is a create a for loop to iterate over our string parameter
    for(let i = 0; i <= s.length - 1; i++) {
      // And then, a really cool trick is to compare the first index of the current value to the last index of the current value,
      // and if they're equal, we know there's only one occurrence of that value in the string. So if we come across one, we'll
      // return the current value  
      if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
        return s[i];
      };
    };
    // If there aren't any non-repeating characters, all we need to do is return null!
    return null;
};