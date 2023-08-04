// Mr. E Ven only likes even length words. Please create a translator so that he doesn't have to hear those pesky odd length words. For some reason he also hates punctuation, he likes his sentences to flow.

// Your translator should take in a string and output it with all odd length words having an extra letter (the last letter in the word). It should also remove all punctuation (.,?!) as well as any underscores (_).

// "How did we end up here? We go?" translated becomes-> "Howw didd we endd up here We go"

function evenator(str) {
    // We'll start by creating an empty string, 'holder,' that will hold the values we add to it while
    // looping
    let holder = '';
    // Next, we'll create a for-loop to iterate over the parameter, 'str'
    for(let i = 0; i <= str.length - 1; i++) {
      // Inside the loop we'll have an if-conditional that will make sure we don't add any form of
      // punctuation to our 'holder' string
      if(str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z' || str[i] === ' ' || str[i] >= '0' && str[i] <= '9') {
        holder += str[i];
      } else {
        continue;
      };
    };
    // We'll then turn our 'holder' string into an array of separate words using .split(' ')
    let array = holder.split(' ');
    // Next, we'll create an empty array, 'result,' that will store our values while looping
    let result = [];
    // Then, we'll create another for-loop to iterate over 'array'
    for(let i = 0; i <= array.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking the length of each word passed through.
      // If it's odd we'll add the last letter to it using the .slice() method, and if it's even we'll
      // leave it as-is. And then we'll use .push() to add it to our 'result' array
      if(array[i].length % 2 !== 0) {
        array[i] = array[i] + array[i].slice(-1);
      } else {
        array[i] = array[i];
      };
      result.push(array[i]);
    };
    // Now we'll use .join(' ') on 'result' and return it!
    return result.join(' ');
};