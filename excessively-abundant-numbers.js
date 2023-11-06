// An abundant number or excessive number is a number for which the sum of its proper divisors is greater than the number itself.

// The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16 (> 12).

// Derive function abundantNumber(num)/abundant_number(num) which returns true/True/.true. if num is abundant, false/False/.false. if not.

function abundantNumber(num) {
    // We'll start by creating a variable, 'count,' that will keep a running sum
    // of divisors
    let count = 0;
    // Next, we'll create a for-loop that will count up to num - 1
    for(let i = 0; i < num; i++) {
      // Inside the loop we'll have an if-conditional that will check to see if 
      // 'num' is divisible by i, and if it is we'll add i to 'count'
      if(num % i === 0) {
        count += i;
      };
    };
    // We'll have one more if-confitional that will check to see if 'count' is 
    // greater than 'num,' and if it is we'll return true. If not, false
    if(count > num) {
      return true;
    } else {
      return false;
    };
};