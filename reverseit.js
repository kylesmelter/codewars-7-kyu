// You have to create a function named reverseIt.

// Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

// Examples of inputs and subsequent outputs:

// "Hello" -> "olleH"

// "314159" -> "951413"

// [1,2,3] -> [1,2,3]

function reverseIt(data){
    // We'll use an if-conditional and typeof to check if the parameter is a string, and if it is
    // we'll use .split(''), .reverse(), and .join('') to reverse it
    if(typeof data === 'string') {
      return data.split('').reverse().join('');
    };
    // We'll use a separate if-conditional and typeof to check if the parameter is a number, and if it
    // is we'll use .toString(), .split(''), .reverse(), and .join('') to reverse it, before putting a
    // '+' in front of it to turn it back into a number
    if(typeof data === 'number') {
      return +data.toString().split('').reverse().join('');
    };
    // If the parameter isn't a string or number, we'll simply return the parameter
    return data;
};