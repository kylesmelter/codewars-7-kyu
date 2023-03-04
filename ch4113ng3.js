// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt){
    // We'll start by creating an empty string variable, result
    let result = '';
    // Next, we'll create a for loop so we can iterate over the string parameter, txt
    for(let i = 0; i <= txt.length - 1; i++) {
      // Now we'll create an if conditional, and if the current value of the loop equals 'a' or 'A, we'll add
      // '4' to our variable, result 
      if(txt[i] === 'a' || txt[i] === 'A') {
        result += '4';
      // If the current value equals 'e' or 'E', we'll add '3' to our variable, result
      } else if (txt[i] === 'e' || txt[i] === 'E') {
        result += '3';
      // If the current value is equal to 'l', we'll add '1' to our variable, result  
      } else if(txt[i] === 'l') {
        result += '1'
      } else {
      // If none of the conditions are met, we'll simply add the current value to our variable, result
        result += txt[i];
      };
    };
    // All we need to do now is return our answer!
    return result;
};