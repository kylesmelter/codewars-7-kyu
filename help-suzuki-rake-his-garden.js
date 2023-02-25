// Help Suzuki rake his garden!

// The monastery has a magnificent Zen garden made of white gravel and rocks. It is raked diligently everyday by the monks. 
// Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the 
// daily raking such as insects or moss.

// You will be given a string representing the garden such as:

// garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel'
// Rake out any items that are not a rock or gravel and replace them with gravel such that:

// garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// Returns a string with all items except a rock or gravel replaced with gravel:
// garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

function rakeGarden(garden) {
    // First, we'll take our garden string and split it into an array
    let array = garden.split(' ');
    // Next, we'll create an empty array to push our values to
    let result = [];
    // Then we'll use a for loop to loop through our garden array in order to check for any value that's not a rock or gravel
    for(let i = 0; i <= array.length - 1; i++) {
      // If the current value is not equal to 'rock' AND it's not equal to 'gravel,' we'll push 'gravel' to our result array  
      if(array[i] !== 'rock' && array[i] !== 'gravel') {
        result.push('gravel');
      } else {
      // Otherwise, we'll just push the current value to our result array becuase we know it's either 'rock' or 'gravel'  
        result.push(array[i]);
      };
    };
    // All we need to do now is return our joined result array!
    return result.join(' ');
};