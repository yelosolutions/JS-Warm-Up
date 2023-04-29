/** Creating the classic Snake Game 
 * PSEUDOCODE
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


//Create block object using a constructor
var Block = function (col, row){
    this.col = col;
    this.row = row;
};

//Create apple object using a constructor
var Apple = function (x, y){
    this.x = update(x);
    this.y = update(y);
};

//Create snake
var Snake = function (){
    this.segments = [
        new Block(7, 5),
        new Block(6, 5),
        new Block(5, 5)
    ];
    this.direction = 'right';
    this.nextDirection = 'right';
};


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
    };
};

//var sampleBlock = new Block(10, 10);
//sampleBlock.drawBlock('blue');

Block.prototype.drawSquare = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = color;

    ctx.fillRect(x, y, blockSize, blockSize);
}

Block.prototype.drawCircle = function (color) {
    var centerX = this.col * blockSize + blockSize / 2;
    var centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;

    circle(centerX, centerY, blockSize / 2, true)
}

//Adding the equal Method
Block.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
}

// The Apple constructor
var Apple = function () {
this.position = new Block(10, 10);
};
// Draw a circle at the apple's location
Apple.prototype.draw = function () {
this.position.drawCircle("LimeGreen");
};
// Move the apple to a new random location
Apple.prototype.move = function () {
var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
this.position = new Block(randomCol, randomRow);
};

var apple = new Apple(width, height);


Snake.prototype.draw = function () {
    for(var i = 0; i < this.segments.length; i++){
        this.segments[i].drawSquare('Blue');
    }
};

Snake.prototype.move = function () {
    var head = this.segments[0];
    this.direction = this.nextDirection;
    var newHead;
    
    if (this.direction === 'right'){
        newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === 'left'){
        newHead = new Block(head.col - 1, head.row);
    } else if(this.direction === 'up'){
        newHead = new Block(head.col, head.row - 1);
    } else if(this.direction === 'down'){
        newHead = new Block(head.col, head.row + 1);
    };

    if(this.checkCollision(newHead)) {
        gameOver();
        return;
    }
    this.segments.unshift(newHead);

    if(newHead.equal(apple.position)) {
        score++;
        apple.move();
    } else {
        this.segments.pop();
    }
};

var keyActions = {
    37 : 'left',
    38 : 'up',
    39 : 'right',
    40 : 'down',
    //13 : 'left',
    16 : 'stop'
};


Snake.prototype.setDirection = function (direction) {
    if(direction === 'left'){
        this.xSpeed = -this.speed;
        this.ySpeed = 0;
    } else if(direction === 'right'){
        this.xSpeed = this.speed;
        this.ySpeed = 0
    } else if(direction === 'up'){
        this.xSpeed = 0;
        this.ySpeed = -this.speed;
    } else if(direction === 'down'){
        this.xSpeed = 0;
        this.ySpeed = this.speed;
    } else if(direction === 'stop'){
        this.xSpeed = 0;
        this.ySpeed = 0;
    };
};

//keyboard events handler
$('body').keydown(function (event){
    snake.setDirection(keyActions[event.keyCode]);
});




var intervalID = setInterval(function () {
    //Clear the canvas
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();

}, 100);
//clearInterval(intervalID)

