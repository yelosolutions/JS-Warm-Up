/**PSEUDOCODE
 * Set up the canvas
 * Set score to zero

 * Create snake
 * Create apple

 * Every 100 milliseconds {
    Clear the canvas
    Draw current score on the screen
    Move snake in current direction
    If snake collides with wall or itself {
        End the game
    } Else If snake eats an apple {
        Add one to score
        Move apple to new location
        Make snake longer
    }
    For each segment of the snake {
        Draw the segment
    }
    Draw apple
    Draw border
    }
    When the user presses a key {
        If the key is an arrow {
            Update the direction of the snake
        }
    }
 */

//get the canvas element
var canvas = document.getElementById('canvas');
//create a 2d drawing context
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;


var update = function (coordinate){
    return Math.floor(Math.random() * coordinate);
}


//Create apple object using a constructor
var Apple = function (x, y){
    this.x = update(x);
    this.y = update(y);
};

//Create snake
var Snake = function (){
    this.x = width / 2;
    this.y = height / 2;

    this.xSpeed = 4
    this.ySpeed = 0;
};


//Dividing the Canvas into Blocks
var blockSize = 10;
var widthInBlocks = width / blockSize;
var widthInBlocks = height / blockSize;

//Draws a border around the canvas
var drawBorder = function () {
    ctx.fillStyle = 'Gray';
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};




//Set score to zero
var score = 0;
//Draw current score on the canvas
var drawScore = function () {
    //change the size and font of the text
    ctx.font = '20px Courier';

    //change the fill color
    ctx.fillStyle = 'Black';

    //change the horizontal position of the text relative to baseline(left-align)
    ctx.textAlign = 'left';

    //change the horizontal position of the text relative to Baseline
    ctx.textBaseline = 'top';

    //use the fillText context method to add text to the canvas
    ctx.fillText('Current Score: ' + score, blockSize, blockSize);
};

//End the game when the snake hits the wall or runs into itself
var gameOver = function () {
    //clears the interval and stops the game
    clearInterval(intervalID);

    //change the size and font of the text
    ctx.font = '60px Courier';

    //change the fill color
    ctx.fillStyle = 'Black';

    //change the horizontal position of the text relative to baseline(left-align)
    ctx.textAlign = 'center';

    //change the horizontal position of the text relative to Baseline
    ctx.textBaseline = 'middle';

    //use the fillText context method to add text to the canvas
    ctx.fillText('Game Over', width / 2, height / 2);
};


//draws circles
var circle = function (x, y, radius, filled){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (filled){
        ctx.fill();
    } else{
        ctx.stroke();
    }
}

Apple.prototype.draw = function () {
    ctx.fillStyle = 'Green';
    circle(this.x, this.y, blockSize / 2, true)
    //ctx.beginPath();
    //ctx.stroke();
}

Snake.prototype.draw = function () {
    ctx.fillStyle = 'Blue';
    ctx.fillRect(this.x, this.y, blockSize, blockSize);
    //ctx.beginPath();
    //ctx.stroke();
};

Snake.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width){
        gameOver();
    }
    if (this.y < 0 || this.y > height){
        gameOver();
    }
};




var snake = new Snake();
var apple = new Apple(width, height);

var intervalID = setInterval(function () {
    //Clear the canvas
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();
    score++;

}, 100);
//clearInterval(intervalID)

