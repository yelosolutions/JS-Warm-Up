var words = [
    "monkey",
    "dog",
    "chicken",
    "jaba",
    "javascript",
    "pilot"
];

var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_"; 
}
var remainingLetters = word.length;

var allowedGuesses = 4;
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
        if (allowedGuesses === 0){
            alert("Too many guesses");
            break;
        }
    }
}

alert(answerArray.join(" "));
alert("The answer was: " + word);