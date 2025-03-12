/* Guess Game Program */

// define function newGame
function newGame(){
  // create a Boolean variable for again, set to true
let again = true
  // run the guessGame function
guessGame()
  // loop as long as again is true 
while (again == true){
    // ask to play again with again set to a confirm
again = confirm("play again?")
    // if again is true run the guessGame function
if (again == true) {
  guessGame()
}
    // close the loop
}
  // thank the player for playing
alert("i am not grateful for your participation.")
  // close the function
}

// create a function called guessGame
function guessGame(){
  // create guess and set equal to 0 
let guess = 0
  // create tries and set equal to 0 
let tries = 0
  // create variable answer and generate a random integer 1-100
var answer = Math.floor(Math.random()*100+1)
  // display the integer for testing purposes only
alert(answer)
  // loop while guess is not equal to answer
while (guess != answer && guess != "q"){
    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("Guess a number, 1-100")
    // add one to tries
tries = tries + 1
    // if guess equals answer display "Correct in [tries] tries!" 
if (guess == answer) alert("correct in " + tries + " tries!")
    // or if guess is "q" break the loop
else if (guess == "q") alert("QUITTER");
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("too high!")
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("too low!")
    // if it's none of those, say "Bad Input!"
else alert("bad input!")
    // end the loop
}
  // end the function
}