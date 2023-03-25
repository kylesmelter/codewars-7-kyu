// DESCRIPTION:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
    // We'll start by creating an empty array, result
    let result = [];
    // Next, we'll take our inpit, x, and make every character lowercase before turning it
    // into an array
    let array = x.toLowerCase().split('');
    // Then we'll create a loop to iterate over our newly created array
    for(let i = 0; i <= array.length - 1; i++) {
    // If the current value is 'a,' we'll push 'b' to our array
      if(array[i] === 'a') {
        result.push('b');
    // IF the current value is 'b,' we'll push 'a' to our array
      } else if(array[i] === 'b') {
        result.push('a');
      } else {
    // If the current value is 'c,' we'll just push it to our array
        result.push('c');
      };
    };
    // Now all we need to do is join our result array!
    return result.join('');
};