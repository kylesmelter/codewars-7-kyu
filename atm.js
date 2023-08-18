// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

function solve(n) {
    // We'll start by checking if 'n' is divisible by 10, and if it isn't we'll
    // return -1
    if(n % 10 !== 0) {
      return -1
    };
    // Next, we'll create a variable, 'count,' that will keep track of the 
    // minimum number of bills 
    let count = 0;
    // Then we'll create a while-loop that will run until 'n' reaches 0
    while(n !== 0) {
      // Inside the loop we'll have a series of if-statements that will ensure
      // we always receive the largest bill possible so we can keep the count
      // of bills as little as possible
      if(n >= 500) {
        n -= 500;
        count += 1
      };
      
      if(n >= 200 && n < 500) {
        n -= 200;
        count += 1;
      };
      
      if(n >= 100 && n < 200) {
        n -= 100;
        count += 1;
      };
      
      if(n >= 50 && n < 100) {
        n-= 50;
        count += 1;
      };
      
      if(n >= 20 && n < 50) {
        n -= 20;
        count += 1;
      };
      
      if(n >= 10 && n < 20) {
        n -= 10;
        count += 1;
      };
    };
    // All we need to do now is return 'count!'
    return count;
};