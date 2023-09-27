// Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

// Write a function that takes a string and returns a string without the unnecessary characters.

// Examples
// removeChars('.tree1')    ==> 'tree'

// removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

// removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'

// removeChars('my_list = ["a","b","c"]')    ==> 'mylist  abc'

// removeChars('1 + 1 = 2')    ==> '    ' (string with 4 spaces)

// removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")  ==> '' (empty string)

function removeChars(s) {
    // We'll use .split('') to turn the parameter, 's,' into an array so we can use .filter() so we
    // can filter out just letters and spaces, and then we'll use .join('') to turn it back into a
    // string and return it
    return s.split('').filter(x => x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z' || x === ' ').join('');
};