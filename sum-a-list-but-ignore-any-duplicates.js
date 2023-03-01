// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
    // We'll start off by creating an empty object that will store the number of occurrences of each value in the numList array
    let list = {};
    // Next we'll create a counter that starts at 0
    let result = 0
    // Now we'll loop through the numList array 
    for(let i = 0; i <= numList.length - 1; i++) {
      // We'll create a variable that will hold the current value of the array while looping  
      let num = numList[i];
      // If the current value already exists in our list object, we'll add 1 to the count of that value, and if it's not in our
      // list object we'll set the count of that value to 1
      list[num] = list[num] + 1 || 1;
    };
    // Then we'll loop through our list object, and if the count of any value is equal to 1, we'll add that value to our
    // result variable
    for(let key in list) {
      if(list[key] === 1) {
        result += Number(key);
      };
    };
    // All that's left to do is return our result!
    return result;
};