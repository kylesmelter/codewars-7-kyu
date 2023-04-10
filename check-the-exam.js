// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
    // We'll start by creating a score variable to keep track of the student's score,
    // and we'll initially have it set to 0
    let score = 0;
    // Next we'll create a for-loop that will iterate over array1 to compare it to array2
    for(let i = 0; i <= array1.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will check to see if the current
      // value of array1 === the current value of array2, and if it does we'll add 4 to our
      // 'score' variable
        if(array1[i] === array2[i]) {
            score += 4;
      // If the current value of either array is an empty string, '', we'll simply continue
      // over it as the value of an empty string is 0
        } else if(array1[i] === '' || array2[i] === ''){
            continue;
      // If neither of the two above conditions are met, we'll subtract 1 from our 'score'
      // variable
        } else {
            score -= 1;
        }
    };
  // If the value of 'score' is < than 0 we'll return 0, otherwise we'll return the value
  // of 'score'
    if(score < 0) {
        return 0;
    } else {
        return score;
    };
};