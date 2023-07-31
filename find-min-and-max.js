// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr){
    // We'll start by creating an empty array, 'result,' to store our variables
    // in
    let result = [];
    // We'll use Math.min.apply() to store the smallest value from the parameter
    // 'arr,' and Math.max.apply() to store the largest
    result[0] = Math.min.apply(Math, arr);
    result[1] = Math.max.apply(Math, arr);
    // Now we just need to return 'result!'
    return result;
};