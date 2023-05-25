// Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins. Your task is to identify them and eliminate!

// Given an array of integers, your task is to find two same numbers and return one of them, for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.

// If there are no twins in the city - return None or the equivalent in the language that you are using.

function elimination(arr){
    // We'll start by creating a for-loop to iterate over the input array, 'arr'
    for(let i = 0; i <= arr.length - 1; i++) {
      // Inside the for-loop we'll have an if-conditional along with the .indexOf() and
      // .lastIndexOf() methods that will check if the value of each--using the current
      // value--is equal. If they aren't, then we know the current value appears more
      // than once and we'll return that value
      if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        return arr[i];
      };
    };
    // At the end we'll have null waiting to be returned if our for-loop comes up empty
    return null;
};