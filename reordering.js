// There is a sentence which has a mistake in its ordering.

// The part with a capital letter should be the first word.

// Please build a function for re-ordering

// Examples
// >>> re_ordering('ming Yao')
// 'Yao ming'

// >>> re_ordering('Mano donowana')
// 'Mano donowana'

// >>> re_ordering('wario LoBan hello')
// 'LoBan wario hello'

// >>> re_ordering('bull color pig Patrick')
// 'Patrick bull color pig'

function reOrdering(text) {
    // We'll start by finding the word with an uppercase first letter using .filter()
    let capital = text.split(' ').filter(x => x[0] === x[0].toUpperCase());
    // Next, we'll create of all the other words without an uppercase letter using
    // .filter() again
    let notCapitals = text.split(' ').filter(x => x[0] !== x[0].toUpperCase());
    // Now we'll use .concat() to combine the two arrays, and then use .join() to
    // return them as a string
    return capital.concat(notCapitals).join(' ');
};