// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// Task:
// Every uppercase letter is Father, The corresponding lowercase letters is the Son.

// Give you a string s, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

// For example:

// sc("Aab") should return "Aa"

// sc("AabBc") should return "AabB"

// sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

// sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-)

function sc(s){
    // Let's start by creating an empty array so we can push our sons and fathers to
    let result = [];
    // Next we'll use the .split() method to turn the input string into an array
    let array = s.split('');
    // Now we'll use a for-loop to iterate over 'array'
    for(let i = 0; i <= s.length - 1; i++) {
      // Inside the loop we'll use an if-conditional and the .includes() method to see
      // if our 'array' variable contains an uppercase (father) && lowercase (son)
      // version of the current value, and if it does we'll use the .push() method
      // to add it to our 'result' variable
      if(array.includes(s[i].toLowerCase()) && array.includes(s[i].toUpperCase())) {
        result.push(s[i]);
      };
    };
    // All we need to do now is use the .join() method on our 'result' variable and
    // return it!
    return result.join('');
};