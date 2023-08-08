// Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

// 'mean' - in case mean value is larger than median value
// 'median' - in case median value is larger than mean value
// 'same' - in case both mean and median share the same value
// Reminder: Median

// Array will always be valid (odd-length >= 3)

function meanVsMedian(numbers) {
    // We'll start by creating a variable, 'mean,' that will find the mean of the values in the
    // parameter, 'numbers'
    let mean = numbers.reduce((acc,c) => acc + c, 0) / numbers.length;
    // We'll then create another variable, 'sorted,' that will sort the numbers from smallest
    // to largest in the parameter, 'numbers'
    let sorted = numbers.sort((a,b) => a - b);
    // Next, we'll create a variable, 'median,' that will store the median value of 'numbers'
    let median = sorted[Math.floor(numbers.length / 2)];
    // Now we'll have an if-conditional to see what we should return
    if(mean > median) {
      return 'mean';
    } else if(mean === median) {
      return 'same';
    } else {
      return 'median'
    };
};