// Comprised of a team of five incredibly brilliant women, "The ladies of ENIAC" were the first “computors” working at the University of Pennsylvania’s Moore School of Engineering (1945). Through their contributions, we gained the first software application and the first programming classes! The ladies of ENIAC were inducted into the WITI Hall of Fame in 1997!

// Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!

// To keep: only alpha characters, space characters and exclamation marks.
// To remove: numbers and these characters: %$&/£?@

// Result should be all in uppercase.

function radLadies(name){
    // We'll start by making every letter uppercase in the parameter, 'name'
    name = name.toUpperCase();
    
    // Next, we'll create a variable, 'filter,' where we filter out the letters, a space, and an
    // exclamation point before using .join('')
    let filter = name.split('').filter(x => x === ' ' || x >= 'A' && x <= 'Z' || x === '!').join('');
    
    // All we need to do now is return 'filter!'
    return filter;
};