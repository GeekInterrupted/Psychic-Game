//psychic game v2.0
//initialize variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;


//select random letter
var randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
//get user input
var userText = document.getElementById("user-text");
    document.onkeyup = function(event) {
//convert to lowercase and make array to store user choices    
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
var cumulativeUserGuesses =guessedLetters.push(userGuess);
        document.getElementById("mydiv").innerHTML = guessedLetters;
        console.log(guessesLeft);
        console.log("computer", randomLetter);

//clear values        
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 10;
    guessedLetters = [];
    randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    letterToGuess = null;
    
    
    
}
   
    if (userGuess === randomLetter) {   
        wins++; 
        document.getElementById("message-wins").innerHTML = "Wins: " + wins;    
        } if (userGuess !== randomLetter) {
             guessesLeft--;
             document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
            } if (guessesLeft === 0) {
                    losses++;
                    document.getElementById("message-losses").innerHTML = "Losses: " + losses;
//                    document.getElementById("computer-choice").innerHTML = "HAL chose: " + randomLetter;
                    reset();
 }   
}
    
 


    


   

 