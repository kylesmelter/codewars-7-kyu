// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    // We'll start by creating an empty array we can push our new values to
    let result = [];
    // Next, we'll use .split() to turn 'str' into an array
    let array = str.split(' ');
    // Now, we'll use a for-loop to iterate over 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll use a template literal and .push() to add the current
      // value along with its length to 'result'
      result.push(`${array[i]} ${array[i].length}`);
    };
    // Now we just need to return 'result!'
    return result;
};