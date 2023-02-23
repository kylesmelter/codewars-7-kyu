// Covfefe
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

function covfefe(str){
    let array = str.split(' ');
    let result = [];
    
    for(let i = 0; i <= array.length -1; i++) {
      if(array[i] === 'coverage') {
      result.push('covfefe');
      } else {
        result.push(array[i]);
      };
    };
    if(!str.includes('coverage')) {
      result.push('covfefe');
    };
    return result.join(' ');
};