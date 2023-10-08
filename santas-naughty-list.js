// Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

function findChildren(santasList, children) {
    // We'll start filtering children to an array whose names are found
    // in santasList
    children = children.filter(x => santasList.includes(x));
    // Next, we'll create a Set out of children so all duplicate names are removed
    let set = new Set(children);
    // Now we'll turn our Set back into an array using the spread operator, and
    // sorting that array
    return [...set].sort();
};