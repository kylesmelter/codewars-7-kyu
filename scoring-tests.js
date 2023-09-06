// A new school year is approaching, which also means students will be taking tests.

// The tests in this kata are to be graded in different ways. A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, points will either be awarded, deducted, or no points will be given at all.

// Return the number of points someone has scored on varying tests of different lengths.

// The given parameters will be:

// An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
// The points awarded for correct answers
// The points awarded for ommitted answers (note that this may be negative)
// The points deducted for incorrect answers (hint: this value has to be subtracted)
// Note: The input will always be valid (an array and three numbers)

// Examples
// #1:

// [0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
// because:

// 5 correct answers: 5*2 = 10
// 1 omitted answer: 1*0 = 0
// 1 wrong answer: 1*1 = 1
// which is: 10 + 0 - 1 = 9

// #2:

// [0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)  -->  3
// because: 4*3 + 3*-1 - 3*2 = 3

//returns the test score
function scoreTest(str, right, omit, wrong){
    // We'll create a variable, 'result,' initially set to 0 that will keep track
    // of points
    let result = 0;
    // Next, we'll create a for-loop to iterate over the parameter, 'str'
    for(let i = 0; i <= str.length - 1; i++) {
      // Inside the loop we'll create an if-conditional that will add or subtract
      // the applicable number of points based on if the answer is correct, omitted, 
      // or wrong
      if(str[i] === 0) {
        result += right;
      } else if(str[i] === 1) {
        result += omit;
      } else {
        result -= wrong;
      };
    };
    // All we need to do now is return 'result!'
    return result;
};