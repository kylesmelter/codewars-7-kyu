// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    // We'll start by creating an empty array, result, to push our values to
    let result = [];
    // Then we'll create a for-loop to iterate over the input array, a
    for(let i = 0; i <= a.length - 1; i++) {
    // Inside the loop we'll have an if-conditional that check to see if the
    // current value is less or === to 'limit,' and if it is we'll push the
    // current value to our array, result   
      if(a[i] < limit || a[i] === limit) {
        result.push(a[i]);
      };
    };
    // Next we'll check to see if the length of our array, result, is === to
    // the length of the input array, a, and if it is we'll return true, and if
    // it's not we'll return false
    if(result.length === a.length) {
      return true;
    } else {
      return false;
    };
};