// Write function makeParts or make_parts (depending on your language) that will take an array as argument and the size of the chunk.

// Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.

function makeParts(arr, chunkSize) {
    // We'll start by creating an empty array, 'result,' that we'll push our chunks to
    let result = [];
    // Next we'll create a for-loop to iterate over arr
    for(let i = 0; i <= arr.length - 1; i += chunkSize) {
      // Inside the loop we'll use .slice() to add 'chunks' to 'result' using 'chunkSize'
      result.push(arr.slice(i, i + chunkSize));
    };
    // All we need to do now is return 'result!'
    return result;
};