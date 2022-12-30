// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

// The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.

// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

// var group = {
//     A: 20, 
//     B: 15, 
//     C: 10
// }

// splitTheBill(group) // returns {A: 5, B: 0, C: -5}

function splitTheBill(x) {
    let values = Object.values(x);
    let entries = Object.entries(x);
    let owesArray = [];
    let final = {};

    let fairShare = values.reduce((acc,c) => acc + c, 0) / values.length;

    for(let i = 0; i <= entries.length - 1; i++){
        if(entries[i][1] > fairShare) {
            entries[i][1] = parseFloat((entries[i][1] - fairShare).toFixed(2));
        } else if(entries[i][1] < fairShare) {
            entries[i][1] = parseFloat(((fairShare - entries[i][1]) * -1).toFixed(2));
        } else if(entries[i][1] === fairShare) {
            entries[i][1] = 0;
        };

        owesArray.push(entries[i]);
    };

    final = owesArray.reduce((result, [key, value]) => {
        result[key] = value;

        return result;
    }, {});

    return final;
};