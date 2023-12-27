// Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

// minimum(10, 6)  //= 2

// 10+2 = 12 which is a multiple of 6
// Note
// 0 is always a multiple of x
// Constraints
// 1 <= a <= 106

// 1 <= x <= 105

function minimum(a, x) {
    // We'll start by creating 3 variables. 'value' will hold the initial value of
    // 'a.' 'addCount' will hold the value while looping up, and 'subtractCount'
    // will hold the value while looping down
    let value = a;
    let addCount = 0;
    let subtractCount = 0;
    // Next, we'll create a while loop that will continue to add 1 to 'a' until 
    // we reach a number divisible by 'x'
    while(a % x !== 0) {
      a += 1;
      addCount += 1;
    };
    
    
    // Then we'll create another while loop that subtract 1 until 'value' is
    // divisible by 'x'
    while(value % x !== 0) {
      value -= 1;
      subtractCount += 1;
    };
    // Now we just need to have an if-conditional to make sure we return the smaller
    // of the two numbers between 'addCount' and 'subtractCount'
    if(addCount < subtractCount) {
      return addCount;
    } else if(subtractCount < addCount) {
      return subtractCount;
    } else {
      return addCount;
    };
};