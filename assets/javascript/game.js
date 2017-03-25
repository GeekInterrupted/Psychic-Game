var wins = 0;
var losses = 0;
var guessCount = 0;
var guessesLeft = 5;
var randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
var gameOver = false;
        
        
        playGame();
        
        function playGame() {       
       
                    
        var userText = document.getElementById("user-text");
        document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            
            console.log("computer", randomLetter);
            
                
          if (userGuess === randomLetter) {   
                wins++; 
                document.getElementById("message-wins").innerHTML= "Wins: "+ wins;
                var cumulativeUserGuesses = userGuess;
		        document.getElementById("mydiv").insertAdjacentHTML('beforeend', cumulativeUserGuesses + ", ");
                		              
            } if (userGuess !== randomLetter) {
                losses++;
                guessesLeft--;
                document.getElementById("message-losses").innerHTML= "Losses: "+ losses;
                var cumulativeUserGuesses = userGuess;
		        document.getElementById("mydiv").insertAdjacentHTML('beforeend', cumulativeUserGuesses + ", ");
                document.getElementById("guesses-left").innerHTML= "You have "+ guessesLeft + " guesses left";
                                             
            }   if (guessesLeft === 0) {
               
                gameOver = true;
                document.getElementById("computer-choice").innerHTML= "HAL chose: "+ randomLetter;
                randomLetter=String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
                console.log(gameOver);
                } if (gameOver===true){ 
//                    document.getElementById("computer-choice").style.visibility = "hidden";
                    guessesLeft=5;
                    losses=0;
                    gameOver = false;
                    
                }
            
            
        }
    }
        
        