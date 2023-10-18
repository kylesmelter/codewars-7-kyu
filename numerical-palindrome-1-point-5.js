// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

// Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.

// For this kata, single digit numbers will NOT be considered numerical palindromes.

// palindrome(6,4) => [11,22,33,44]
// palindrome(59,3) => [66,77,88]
// palindrome(101,2) => [101,111]
// palindrome("15651",5) => "Not valid" 
// palindrome(1221,"8") => "Not valid" 

function palindrome(num,s) { 
    // We'll first use an if-conditional to make sure the parameter, 'num,'
    // is > 0, and 'num' and 's' are both have a type of 'number'
    if(num < 0 || typeof num !== 'number' || typeof s !== 'number') {
      return 'Not valid';
    };
    // Next, we'll create an empty array, 'result,' that we'll use to push
    // our palindromes to
    let result = [];
    //We'll then create a while-loop, and have it run as long as the length of
    // 'result' is < 's'
    while(result.length < s) {
      // We'll create a variable, 'reversed,' that will store the value of
      // 'num' reversed
      let reversed = String(num).split('').reverse().join('');
      // We'll use another if-conditional to check if the length of 'num' is
      // > 1, and if 'reversed' === num, and if it does we'll push it to 'result'
      if(reversed.length > 1 && reversed === String(num)) {
        result.push(num);
      }
      // We'll add 1 to 'num' with each iteration
      num += 1;
    };
    // Now we just need to return 'result!'
    return result;
};