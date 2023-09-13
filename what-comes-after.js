// You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

// If there is a number, punctuation or underscore following the letter, it should not be returned.

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"
// Return an empty string if there are no instances of letter in the given string.

function comes_after(str,l) {
    // We'll start by creating an empty string, 'result,' that we'll return at the end
    let result = '';
    // Next, we'll create a for-loop to iterate over the parameter, 'str'
    for(let i = 0; i <= str.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if 'l' is found, and if it is we'll
      // add the value to 'result' as long as it's a letter
      if(str[i] === l && str[i + 1] >= 'a' && str[i + 1] <= 'z' || str[i] === l && str[i + 1] >= 'A' && str[i + 1] <= 'Z') {
        result += str[i + 1];
      } else if(str[i] === l.toUpperCase() && str[i + 1] >= 'a' && str[i + 1] <= 'z' || str[i] === l.toUpperCase() && str[i + 1] >= 'A' && str[i + 1] <= 'Z') {
        result += str[i + 1];
      };
    };
    // Now we just return 'result!'
    return result;
};