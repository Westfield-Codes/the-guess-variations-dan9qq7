/* Simple Guess Program */

// define function guessGame
function guessgame(){
  // generate a random integer 1-100
let roll = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
  alert (roll)

  // create guess and set equal to 0 
var guess = 0
  // loop while guess is not equal to answer
while (guess != roll){
    
    // set guess equal to asking user to "Guess a number, 1-100"
     guess = prompt("Guess a number, 1-100")
    // if guess equals answer display "Correct!" 
if (guess == roll) alert("Correct!")
    // or if guess is greater than answer display "Too high!" 
else if(guess > roll)alert("Too High!")
    // or if guess is less than answer display "Too low!" 
else if (guess < roll) alert("Too low!")
    // else say "Bad input"
else alert("Bad input")
  // end the loop
}
// end the function
}