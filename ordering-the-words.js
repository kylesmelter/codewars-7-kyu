// Given a string, you need to write a method that order every letter in this string in ascending order.

// Also, you should validate that the given string is not empty or null. If so, the method should return:

// "Invalid String!"
// Notes
// • the given string can be lowercase and uppercase.
// • the string could include spaces or other special characters like '# ! or ,'. Sort them based on their ASCII codes
// Examples
// "hello world" => " dehllloorw"
// "bobby"       => "bbboy"
// ""            => "Invalid String!"
// "!Hi You!"    => " !!HYiou"
// Good luck! Hope you enjoy it

function orderWord(s){
    // We'll start with an if-conditional checking to see if the parameter, 's,' is an empty space
    // or null, and if it's either of those things we'll return 'Invalid String'
    if(s === '' || s === null) {
      return 'Invalid String!'
    };
    // All we need to do here is sort by character codes and return it as a string!
    return s.split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).join('');
};