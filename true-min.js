// The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

// Note: This min function need not handle more than two arguments.

// function min(a, b){
//   return (a<b)?a:b;
// }

function min(a, b){
    if(a === null) a = 0;
    if(b === null) b = 0;
    if(a === undefined) a = NaN;
    if(b === undefined) b = NaN;
    if(typeof a !== 'number') a === NaN;
    if(typeof b !== 'number') b === NaN;
    
    if(isNaN(a) || isNaN(b)) {
      return NaN;
    } else if(a < b) {
      return a;
    } else {
      return b;
    };
};