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
var allowedGuesses = 10;

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

var areAnswersSame = (ans1, ans2) => {
    if (ans1.length !== ans2.length){
        return "The player's answer and the actual word have different sizes.";
    }
    for (var k = 0; k < word.length; k++) {
        var result = ans1[k] === ans2[k];
        if (result !== true){
            return false;
        }
    }
    return true;
    
}


var decision = areAnswersSame(playerAnswer, word);


console.log(playerAnswer);
console.log(decision);

//displays the answers provided by the player

if (decision === true){
    //congratulates the player and displays the actual word
    alert("Congratulations! The actual word was: " + word);
}else {
    //displays the actual word 
    alert("Your word is: " + playerAnswer + ", but the actual word was: " + word );
};