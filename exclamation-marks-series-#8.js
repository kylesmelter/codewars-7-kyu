// Description:
// Move all exclamation marks to the end of the sentence

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

function remove (string) {
    let string2 = '';
    let points = '';
    
    for(let i = 0; i <= string.length - 1; i++) {
      if(string[i] !== '!') {
        string2 += string[i];
      } else {
        points += string[i];
      };
    };
    return string2.concat(points);
};