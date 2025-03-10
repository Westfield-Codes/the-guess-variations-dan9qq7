/* Simple Guess Program */

// define function guessGame
function guessgame(){
  // generate a random integer 1-100
let answer = Math.floor(Math.random()*100+1);

  // display the integer for testing purposes only
alert(answer)
  // create guess and set equal to 0 
let guess = 0
  // loop while guess is not equal to answer or to "q"
while (guess != answer && guess != "q") {
    // set guess equal to asking user to "Guess a number, 1-100"
 guess = prompt("Guess a number 1-100 or q to quit.")
    // if guess equals "q" display ""
if (guess == "q") alert("Quitter!");
    // or if guess equals answer display "Correct!" 
else if (guess == answer) alert("Correct!");
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("too high");
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("too Low");
    // or say "Bad input"
else alert("Bad input.");
  // end the loop
}
// end the function
}