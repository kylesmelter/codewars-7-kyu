// Ninjas frequently need to signal each other in code, often employing natural sounds as a cover. We’re going to give our ninja the ability to chirp like a cricket, with the number of chirps encoding different messages.

// Implement a "recursive function" that takes one parameter (n) and outputs a string i.e.

//   chirp(4);
//   //output would be chirp-chirp-chirp-chirp.
// javascript/coffescript: don't use the String method .repeat(), write a recursive function, remember you're a Ninja!

function chirp(n) {
  // All we need here is an if-conditional checking to see if 'n' === 1, and if it does we'll
  // return 'chirp,' and if it doesn't we'll use recursion to return 'chirp' + another function
  // call with 'n - 1' as the parameter
  if(n === 1) {
    return 'chirp';
  } else {
    return 'chirp-' + chirp(n - 1);
  };
};