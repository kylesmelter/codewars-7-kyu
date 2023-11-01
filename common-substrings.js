// Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

// #Examples:

// *Example 1*
// SubstringTest("Something","Fun"); //Returns false

// *Example 2*
// SubstringTest("Something","Home"); //Returns true
// In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
// In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)

// #Rules: Lowercase and uppercase letters are the same. So 'A' == 'a'.
// We only count substrings that are > 1 in length.

// #Input: Two strings with both lower and upper cases. #Output: A boolean value determining if there is a common substring between the two inputs.

function SubstringTest(str1, str2) {
    // We'll first turn each parameter, 'str1' and 'str2,' into lowercase versions
    // of themselves using .toLowerCase()
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // Next, we'll create an empty array that will end up storing each two letter
    // combination within str1 in order
    let str1Pieces = [];
    // Then we'll create a for-loop to iterate over str1
    for(let i = 0; i <= str1.length - 1; i++) {
      // Inside the loop we'll use .push() to push each two letter combination to
      // str1Pieces
      str1Pieces.push(str1.slice(i, i + 2));
    };
    // We'll then create a second for-loop that will iterate over our created array,
    // str1Pieces
    for(let i = 0; i <= str1Pieces.length - 1; i++) {
      // If the current value can be found in str2, and the length of the current
      // value is greater than 1, we'll return true
      if(str1Pieces[i].length > 1 && str2.includes(str1Pieces[i])) {
        return true;
      };
    };
    // We'll return false at the end in case the for-loop above doesn't find a match
    return false;
};