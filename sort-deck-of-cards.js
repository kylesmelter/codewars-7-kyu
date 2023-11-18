// Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of cards is sorted by rank, no matter the starting collection.

// All cards in the list are represented as strings, so that sorted list of cards looks like this:

// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

// Example:

// >>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
// Hint: Tests will have many occurrences of same rank cards, as well as vary in length. You can assume though, that input list is always going to have at least 1 element.

function sortCards(array){
    // We'll start by creating an array that will have the cards sorted in ascending
    // order
    let ranks = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
    // Now all we need to do is use .sort() on the parameter, 'array,' and sort them
    // according to each cards index in 'ranks!'
    return array.sort((a,b) => ranks.indexOf(a) - ranks.indexOf(b));
};