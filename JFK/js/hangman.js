/*
    Implements a game that allows players to guess letters of blanked words. 
*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var drawHangman = function (wrongGuesses){
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'Black';
    
    if(wrongGuesses === 1){
        ctx.strokeRect(20, 10, 20, 20);
    } else if(wrongGuesses === 2){
        ctx.beginPath();
        ctx.moveTo(30, 30);
        ctx.lineTo(30, 70);
    } else if(wrongGuesses === 3){
        ctx.moveTo(30, 50);
        ctx.lineTo(10, 40);
    }
    else if(wrongGuesses === 4){
        ctx.moveTo(30, 50);
        ctx.lineTo(50, 40);
    }
    else if(wrongGuesses === 5){
        ctx.moveTo(30, 70);
        ctx.lineTo(10, 100);
    }
    else if(wrongGuesses === 6){
        ctx.moveTo(30, 70);
        ctx.lineTo(50, 100);
    }
    ctx.stroke();
};

// draw the current word underneath the hangman
var drawAnswer = function () {
    ctx.fillStyle = 'Black';
    ctx.font = '20px courier';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(playerAnswer , 10, 120);
}


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
var allowedGuesses = 50;
var wrongGuesses = 0;

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
            } else if (word[j] !== guess){
                wrongGuesses++;
                drawHangman(wrongGuesses);
            }       
        }
        allowedGuesses--;
    }
//end of game loop
}

var playerAnswer = answerArray.join("");
drawAnswer();

var areAnswersSame = function (ans1, ans2){
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