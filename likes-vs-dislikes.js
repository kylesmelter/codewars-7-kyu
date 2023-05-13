// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

function likeOrDislike(buttons) {
    // We'll start by creating a variable, 'result,' and initially set it to
    // 'Nothing' in case the input array is empty
    let result = 'Nothing';
    // Next we'll create a for-loop so we can iterate over the input array, 'buttons'
    for (let i = 0; i < buttons.length; i++) {
    // Inside the for-loop we'll have an if-conditional to check the current value
    // and compare it to the value of our 'result' variable. The value of 'result'
    // will become whatever the current value is
    if (buttons[i] === result) {
      result = 'Nothing';
    } else {
      result = buttons[i];
    };
  };
  // All we need to do now is return 'result!'
  return result;
};