/*
    Implements a game that allows players to guess letters of blanked words. 
*/

//creates an array of words 
var words = [
    "monkey",
    "dog",
    "chicken",
    "jaba",
    "javascript",
    "pilot"
];

//chooses a random word to be guessed 
var word = words[Math.floor(Math.random() * words.length)];

//declares an empty variable to store the answers provided by player 
var answerArray = [];

//creates an array of underscores to represent words to be guessed
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_"; 
}

//declares a variable for the size of the random word
var remainingLetters = word.length;

//specifies the number of allowed guesses
var allowedGuesses = 5;

//the game loop
while ( remainingLetters > 0 && allowedGuesses > 0){
    alert("Fill in the blank spaces.\n" + answerArray.join(" "));
    var guess = prompt("Guess a letter, or click cancel to stop playing");
    if (guess === null){
        break;
    } else if (guess.length !== 1){
        alert("The guess must be a single letter");
    } else {
        for (var j = 0; j < word.length; j++){
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
                alert("You have " + remainingLetters + " more blank letters to fill\n");
            }       
        }
        allowedGuesses--;
    }
//end of game loop
}

var playerAnswer = answerArray.join("");

//displays the answers provided by the player
alert(playerAnswer);

if (playerAnswer.length === word.length){
    //congratulates the player and displays the actual word 
    alert("Congratulations! The word was: " + word + "!!!");
};

//displays the actual word 
alert("Your word is: " + playerAnswer + ", but the actual word was: " + word );