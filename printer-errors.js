// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
    // We'll first turn the input, 's,' into all lowercase letters so we're only
    // dealing with one case
    let lowercase = s.toLowerCase();
    // Next, we'll create an array, 'good,' consisting of all the letters from 'a'
    // through 'm'
    let good = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    // Then we'll create a counter variable, 'count,' that will keep track of
    // every letter not included in 'good'
    let count = 0;
    // Now we'll create a for-loop to iterate over our array, 'lowercase'
    for(let i = 0; i <= lowercase.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will check to see if
      // the current value is not in 'good,' and if it's not we'll add 1 to 'count'
      if(!good.includes(lowercase[i])) {
        count += 1;
      };
    };
  // Now we'll use a template literal to help us return the ratio in a string format
  return `${count}/${lowercase.length}`;
};