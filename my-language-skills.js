// You are given a dictionary/hash/object containing some languages and your test results in the given languages. 
//Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
  // We'll first use Object.entries() on the input 'results' to turn it from an object
  // into an array of arrays
  let entries = Object.entries(results);
  // Next, we'll use .sorted() to sort the values in order from largest to smallest
  let sorted = entries.sort((a,b) => b[1] - a[1]);
  // Next, we'll create an empty array, 'result,' to push our values to while looping
  let result = [];
  // Then we'll create a for-loop to iterate over our 'sorted' array
  for(let i = 0; i <= sorted.length - 1; i++) {
    // Inside the loop we'll have an if-conditional to see if the score in each value
    // is >= 60, and if it is we'll use .push() to add the language to our 'result' array
    if(sorted[i][1] >= 60) {
      result.push(sorted[i][0])
    };
  };
  // All we need to do now is return 'result!'
  return result;
};