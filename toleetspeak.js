// Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

// For example:

// toLeetSpeak("LEET") returns "1337"
// In this kata we use a simple LeetSpeak dialect. Use this alphabet:

// {
//   A : '@',
//   B : '8',
//   C : '(',
//   D : 'D',
//   E : '3',
//   F : 'F',
//   G : '6',
//   H : '#',
//   I : '!',
//   J : 'J',
//   K : 'K',
//   L : '1',
//   M : 'M',
//   N : 'N',
//   O : '0',
//   P : 'P',
//   Q : 'Q',
//   R : 'R',
//   S : '$',
//   T : '7',
//   U : 'U',
//   V : 'V',
//   W : 'W',
//   X : 'X',
//   Y : 'Y',
//   Z : '2'
// }

function toLeetSpeak(str) {
  // We'll start by making sure 'dictionary' is included in the function
  let dictionary = {
    A : '@',
    B : '8',
    C : '(',
    D : 'D',
    E : '3',
    F : 'F',
    G : '6',
    H : '#',
    I : '!',
    J : 'J',
    K : 'K',
    L : '1',
    M : 'M',
    N : 'N',
    O : '0',
    P : 'P',
    Q : 'Q',
    R : 'R',
    S : '$',
    T : '7',
    U : 'U',
    V : 'V',
    W : 'W',
    X : 'X',
    Y : 'Y',
    Z : '2'
  };
  // Next, we'll create an empty string, 'result,' that will store our new values
  let result = '';
  // Then, we'll create a for-loop that will iterate over the parameter, 'str'
  for(let i = 0; i <= str.length - 1; i++) {
    // Inside the loop we'll create a variable, 'current,' that will store the
    // current value of the loop
    let current = str[i];
    // Next, we'll have an if-conditional checking to see if current === ' ',
    // and if it does we'll add ' ' to 'result'
    if(current === ' ') {
      result += current;
    }
    // Then, we'll create another for-loop that will loop through 'dictionary'
    // checking to see if 'current' matches any of the keys in 'dictionary,' and
    // if it does we'll add the value of that key to 'result'
    for(let key in dictionary) {
      if(key === current) {
        result += dictionary[key]
      };
    };
  };
  // Now we just need to return 'result!'
  return result;
};