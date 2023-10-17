// You woke up from a massive headache and can't seem to find your car key. You find a note with a clue that says:

// "If you're reading this then I have left the state and am well on my way to freedom. Just to make things interesting, I have also provided something for you to track me with. Let the chase begin..."

// Given an array of binary numbers, figure out and return the culprit's message to find out who took the missing car key.

// ['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'] => 
// 'Alexander'

function whoTookTheCarKey(message) {
    // We'll start by creating an array, 'result,' that we'll use to push our converted letters to
    let result = [];
    // Now we'll create a for-loop to iterate over the parameter, 'message'
    for(let i = 0; i <= message.length - 1; i++) {
      // We'll use 'String.fromCharCode() and parseInt() to turn the binary bit into the applicable
      // alphabet character and push it to 'result
      result.push(String.fromCharCode(parseInt(message[i], 2)));
    };
    // Now we'll use .join('') and return 'result!'
    return result.join('');
};