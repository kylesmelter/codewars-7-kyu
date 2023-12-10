function encode(str) {
    // We'll first create an object named, 'letters,' that will store the value of each letter
    let letters = {
     a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13,
     n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
   }; 
    // Now we'll use .toLowerCase() to turn every character in 'str' into a lowercase
    // version, and then we'll use .split() to turn 'str' into an array, and .map()
    // to create a new array where we turn the character into a number if the character
    // is included in 'letters,' or we leave it as-is
    return str.toLowerCase().split("").map(x => letters[x] || x).join('');
};