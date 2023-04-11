var pickWord = () => {
    var words = [
        "monkey",
        "dog",
        "chicken",
        "jaba",
        "javascript",
        "pilot"
    ];
    return words[Math.floor(Math.random() * words.length)];
};
var word = pickWord();

var setupAnswerArray = (word) => {
    var array = []
    for (var i = 0; i < word.length; i++){
        array[i] = "_";
    }
    return array;

}

var answerArray = setupAnswerArray(word);

var remainingLetters = word.length;


var showPlayerProgress = (answerArray) => {
    alert("The HANGMAN game: Guess the letters of the following word: " + answerArray);   
};

var getGuess = () => {
    return prompt("Play game or click cancel to quit");
};

var updateGameState = (guess, word, answerArray) =>{
    for (var j = 0; j < word.length; j++){
        if (word[j] === guess) {
            answerArray[j] = guess;
            return j;
        }
    }
           
}

var showAnswerAndCongratulatePlayer = (answerArray) => {
    alert(answerArray.join(" "))
    alert("Congratulations! The word was " + word)
}


while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}


showAnswerAndCongratulatePlayer(answerArray);
