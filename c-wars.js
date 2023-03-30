// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 
// Complete the function initials.

// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

function initials(n){
    // We'll start by creating an array of separate names     
    let array = n.split(' ');
    // Next we'll create a variable for the last name in the array
    let lastName = array[array.length - 1];
    // Then we'll create a variable consisting of an empty string to add our
    // results to
    let result = '';
    // Next up is a for-loop to iterate over our array
    for(let i = 0; i <= array.length - 1; i++) {
      // If the current value of i is equal to lastName, we'll add the first letter
      // in uppercase form as well as the rest of the name  
      if(array[i] === lastName) {
        result += array[i][0].toUpperCase() + array[i].slice(1);
      } else {
      // Otherwise we'll add just the first letter of each name in uppercase form
      // plus a period
        result += array[i][0].toUpperCase() + '.';
      };
    };
    // Now we just need to return our result!
    return result;
};