// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
    // We'll start by by getting the sum of the odd and even numbers, and storing them in their
    // respective variables
    let evens = str.split('').map(Number).filter(x => x % 2 === 0).reduce((acc,c) => acc + c, 0);
    let odds = str.split('').map(Number).filter(x => x % 2 !== 0).reduce((acc,c) => acc + c, 0);
    // Next, we'll use an if-conditional to see which statement we should return
    if(evens > odds) {
      return 'Even is greater than Odd';
    } else if(odds > evens) {
      return 'Odd is greater than Even';
    } else {
      return 'Even and Odd are the same';
    };
};