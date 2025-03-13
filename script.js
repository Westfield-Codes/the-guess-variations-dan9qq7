function newGame(){
var again = true
guessGame()
while (again == true){
  again = confirm("play gain?")
  if (again == true){
    guessGame()
  }
  else alert("Begone then.")
}
}

function guessGame(){
  var answer = Math.floor(Math.random()*100+1)
  alert(answer)
var guess = 0
var tries = 0

while (guess != answer) {
guess = prompt("guess a number 1-100")
tries = tries + 1
if (guess == answer) alert("correct in " + tries + " Tries!")
else if (guess > answer) alert("too high!")
  else if (guess < answer) alert("too low!")
else alert("bad input!")
}

}