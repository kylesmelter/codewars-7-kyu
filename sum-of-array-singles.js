// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

function repeats(arr){
    // We'll create a variable, 'result,' that will act as our counter and in the end it will be the
    // sum of the two numbers that appear only once
    let result = 0;
    // Next, we'll use a for-loop to iterate over 'arr'
    for(let i = 0; i <= arr.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will use .indexOf() and .lastIndexOf() in
      // order to see if the current value appears just once. If it does we'll add that number to
      // result
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        result += arr[i];
      };
    };
    // Now we just need to return 'result!'
    return result;
};