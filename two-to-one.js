// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let array1 = s1.split('');
    let array2 = s2.split('');
    
    let array3 = array1.concat(array2);
    
    let set = new Set(array3);
    
    let sorted = [...set].sort();
    
    let newString = sorted.join('');
    
    return newString;
};