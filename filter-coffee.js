// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

function search(budget, prices) {

    // We'll first start using the .filter() method on the 'prices' input to filter
    // for all the prices that are <= to the 'budget' input
    let filter = prices.filter(x => x <= budget);
    // Now we need to use the .sort() method to sort them in ascending order
    let sorted = filter.sort((a,b) => a - b);
    // All we need to do now is join our array to form a string and return it!
    return sorted.join(',');
};