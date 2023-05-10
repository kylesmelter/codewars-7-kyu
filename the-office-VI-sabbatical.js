// Learning to code around your full time job is taking over your life. You realise that in order to make significant steps quickly, it would help to go to a coding bootcamp in London.

// Problem is, many of them cost a fortune, and those that don't still involve a significant amount of time off work - who will pay your mortgage?!

// To offset this risk, you decide that rather than leaving work totally, you will request a sabbatical so that you can go back to work post bootcamp and be paid while you look for your next role.

// You need to approach your boss. Her decision will be based on three parameters:

// val = your value to the organisation
// happiness = her happiness level at the time of asking and finally
// The numbers of letters from 'sabbatical' that are present in string s.

// Note that if s contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.

// If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

function sabb(s, val, happiness){
    // We'll start by creating a variable, 'score,' that will keep track of the total
    // amount of points, and we'll initially set it to the sum of 'val' + 'happiness'
    let score = val + happiness;
    // Next, we'll create an array, 'array,' that will store 1 copy of each letter
    // in 'sabbatical' so we can use the .includes() method instead of messy if-conditionals
    // while iterating through the input string, 's'
    let array = ['s', 'a', 'b', 't', 'i', 'c', 'l'];
    // Then we'll use the .toLowerCase() method to turn the input string, 's,' into a lowercase
    // version of itself so the values while iterating will equal the values in our array, 'array,'
    // if any
    s = s.toLowerCase();
    // Now we'll iterate over the input string, 's,' to see if any of the letters match those
    // in our array, 'array'
    for(let i = 0; i <= s.length - 1; i++) {
      // Inside the loop we'll create a simple if-conditional to check if any of the values in
      // our array, 'array,' match the current value, and if there is a match we'll increase the
      // value of our 'score' variable by 1
      if(array.includes(s[i])) {
        score += 1;
      };
    };
    // Once we're done looping, we'll create one more if-conditional to check the value of 'score,'
    // and return the applicable statement based on the total
    if(score > 22) {
      return 'Sabbatical! Boom!';
    } else {
      return 'Back to your desk, boy.';
    };
};