// The following code is not giving the expected results. Can you debug what the issue is?

// The following is an example of data that would be passed in to the function.

// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']

function getNames(data) {
    // We can turn it into an arrow function by replacing 'function(item)' with
    // '=>' and return it!
    return data.map(x => x.name);
};