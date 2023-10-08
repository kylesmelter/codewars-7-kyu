// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")  
// //         --^-- midpoint  
// //         bri    first half (lower-cased)  
// //            AN second half (upper-cased)  

function sillycase(silly) {
    // All we need here is the magic of if-conditonals, .slice(), and Math.ceil()
    if(silly.length % 2 === 0) {
      return silly.slice(0, silly.length / 2).toLowerCase() + silly.slice(silly.length / 2).toUpperCase();
    } else {
      return silly.slice(0, Math.ceil(silly.length / 2)).toLowerCase() + silly.slice(Math.ceil(silly.length / 2)).toUpperCase();
    };
};