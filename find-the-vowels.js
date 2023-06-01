// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    // Let's start by creating an array, 'vowels,' that will hold every vowel in uppercase
    // and lowercase forms so we can use the .includes() method in a for-loop later
    let vowels = ['A', 'E', 'I', 'O', 'U', 'Y', 'a', 'e', 'i', 'o', 'u', 'y'];
    // The next thing we'll do is create an empty array, 'result,' to add our values to
    let result = [];
    // Then we'll create a for-loop to iterate over the inpur, 'word'
    for(let i = 0; i <= word.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will use the .includes() method
      // to see if the current value is a vowel, and if it is we'll use the .push() method
      // to add the value of (i + 1) to our 'result' array
      if(vowels.includes(word[i])) {
        result.push(i + 1);
      };
    };
    // All we need to do now is return 'result!'
    return result;
};