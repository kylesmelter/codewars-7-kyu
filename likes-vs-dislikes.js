// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up 
// in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about 
// the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the 
// dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Create a function that takes in a list of button inputs and returns the final state.

// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

function likeOrDislike(buttons) {
  // We'll first check if the length of the input array, 'buttons,' === 0, and if it does we'll return 'Nothing'
  if(buttons.length === 0) {
    return 'Nothing';
  };
  // Next, we'll create a variable, 'result,' with no inital value as it will be assigned later during a for-loop
  let result;
  // Now we'll create that for-loop we just mentioned
  for(let i = 0; i <= buttons.length - 1; i++) {
    // Then we'll have an if-conditional that will check what the current value is, and assign a value to 'result' based off it
    if(buttons[i] !== result) {
      result = buttons[i];
    } else if(buttons[i] === result) {
      result = 'Nothing';
    };
  };
  // All we need to do now is return 'result!'
  return result;
};