// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks
// Note:

// To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

function hydrate(s) {
    // We'll start by using .split(), .filter(), .map(), and .reduce() to figure
    // out how many glasses of water we'll need, and store it in a variable
    let waterGlasses = s.split(' ').filter(x => x >= '0' && x <= '9').map(Number).reduce((acc,c) => acc + c, 0);
    // Now, we'll use an if-statement to make sure we have the proper grammar
    // and return it!
    if(waterGlasses === 1) {
      return `${waterGlasses} glass of water`;
    } else {
      return `${waterGlasses} glasses of water`;
    };
};