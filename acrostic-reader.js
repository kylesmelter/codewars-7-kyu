// An acrostic is a text in which the first letter of each line spells out a word. It is also a quick and cheap way of writing a poem for somebody, as exemplified below :

// Write a program that reads an acrostic to identify the "hidden" word. Specifically, your program will receive a list of words (reprensenting an acrostic) and will need to return a string corresponding to the word that is spelled out by taking the first letter of each word in the acrostic.

function readOut(acrostic) {
    // We'll use the magic of .map() to grab the first of letter of each word, and then joining them
    // together to create the acrostic and return it!
    return acrostic.map(x => x[0]).join('');
};