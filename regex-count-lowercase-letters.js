// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
    // We'll use .split() to turn 'str' into an array, and then we'll use .filter()
    // to create an array of only lowercase letters, and finally we'll add .length
    // at the end to return the length of the array of lowercase letters
    return str.split('').filter(x => x >= 'a' && x <= 'z').length;
};