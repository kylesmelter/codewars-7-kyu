// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

//   onlyOne() --> false
//   onlyOne(true, false, false) --> true
//   onlyOne(true, false, false, true) --> false
//   onlyOne(false, false, false, false) --> false

function onlyOne() {
    // We'll start with an if-conditional making sure there are parameters entered, and if there are
    // none we'll return false;
    if(arguments.length < 1) {
      return false;
    };
    // Next, we'll use Array.from() to create an array
    let array = Array.from(arguments);
    // Now we'll use a for-loop to iterate over 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll use .filter() to create an array involving only true
      let filter = array.filter(x => x === true);
      // If the length of 'filter' equals 1 we'll return true
      if(filter.length === 1) {
        return true;
      };
    };
    // We'll return false at the very end as a final catch
    return false;
};