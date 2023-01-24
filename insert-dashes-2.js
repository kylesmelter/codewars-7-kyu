// This is a follow up from my kata Insert Dashes.
// Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num
// For example:
// insertDashII(454793) --> 4547-9-3
// insertDashII(1012356895) --> 10123-56*89-5

// Zero shouldn't be considered even or odd.

function insertDashII(num) {
    let array = num.toString().split('').map(Number);
 let result = [];
 
 for(let i = 0; i <= array.length - 1; i++) {
   let current = array[i];
   let next = array[i + 1];
   
   if(current % 2 !== 0 && next % 2 !== 0 && current > 0 && next > 0) {
     result.push(current);
     result.push('-');
   } else if(current % 2 === 0 && next % 2 === 0 && current > 0 && next > 0) {
     result.push(current);
     result.push('*');
   } else {
     result.push(current)
   }
 };
 if(result[result.length - 1] === '-' || result[result.length - 1] === '*') {
   result.pop();
 };
 return result.join('');
};