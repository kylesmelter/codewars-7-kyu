// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

function maxDiff(list) {
    // We'll start by checking if 'list' is empty, and if it is we'll return 0
    if(list.length === 0) {
      return 0;
    };
    // Next, we'll sort list in ascending order using .sort()
    list = list.sort((a,b) => a - b);
    // Then we'll create a variable, 'count,' which will end up storing the difference
    // between the smallest and largest number
    let count = 0;
    // Now, we'll create a variable, 'highNum,' that will store the largest number
    let highNum = list[list.length - 1];
    // Next, we'll create a while-loop that will run for as long as 'highNum' !==
    // the smallest number in 'list'
    while(highNum !== list[0]) {
      // Inside the loop we'll add 1 to 'count' for each iteration, and we'll also
      // subtract 1 from highNum
      count += 1;
      highNum -= 1;
    };
    // All we need to do now is return 'count!'
    return count;
};