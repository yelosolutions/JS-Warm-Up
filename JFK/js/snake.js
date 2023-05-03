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

//define width and height variables
var width = canvas.width;
var height = canvas.height;

//define blockSize, widthInBlocks, heightInBlocks variables
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;



//Set score to zero
var score = 0;

//Draws a border around the canvas
var drawBorder = function () {
    ctx.fillStyle = 'Gray';
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};

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


/*Create block object using a constructor called Block
Column and row values are passed into the Block constructor as arguments and 
saved in the col and row properties of the new object.
*/
var Block = function (col, row){
    this.col = col;
    this.row = row;
};

var head = new Block(5, 5);
var apple = new Block(5, 6);

//a method shared by block objects, it draws a square block on the canvas
Block.prototype.drawSquare = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
};



//a method shared by block objects, it draws a circle in the block on the canvas
Block.prototype.drawCircle = function (color) {
    var centerX = this.col * blockSize + blockSize / 2;
    var centerY = this.row * blockSize + blockSize / 2;

    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
};

/*add the equal method to the Block constructor
prototype, it determines whether two blocks are in the same location
*/
Block.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};



/**Create the Snake
The snake’s position will be stored as an array called segments, which will 
contain a series of block objects. To move the snake, add a new block 
to the beginning of the segments array and remove the block at the end of the array. 
The first element of the segments array will represent the head of the snake.
 * Setting the Direction of Movement
The nextDirection property will be updated by a keydown event handler when the 
player presses an arrow key. For now, the constructor sets both direction and 
nextDirection properties to "right", at the beginning the snake will move to the right.
*/
var Snake = function () {
    //an array of block objects, each represents a segment of the snake's body
    this.segments = [
        new Block(7, 5),
        new Block(6, 5),
        new Block(5, 5)
    ];
    //first element of the segments array, represents the head of the snake
    //this.head = this.segments[0];

    //The direction property at stores the current direction of the snake
    this.direction = 'right';

    //stores the direction in which the snake will move for the next animation step
    this.nextDirection = 'right';
};



;

var checkIfOdd = function (index) {
    for (var i = 0; i < 10; i++) {
        var even = 2 * i;
        var odd = 2 * i + 1;
        if(index === 1 || index === odd){
            return true;
        } else if(index === even){
            return false;
        };
    }
    
};


var colors = ['Green', 'Blue', 'Gold'];

var changeColors =  function (index) {
    if (index < 1){
        return colors[0];
    } else if (checkIfOdd(index)) {
        return colors[1];
    } else {
        return colors[2];
    }
};

/*add the draw method to the Bsnake constructor prototype, 
it draws a snake object
*/
Snake.prototype.draw  = function (color) {
    for(var i = 0; i < this.segments.length; i++){
        this.segments[i].drawSquare(changeColors(i));
    }
};


/*The move method will also call a method, checkCollision, to see whether the new 
head has collided with the rest of the snake or with the wall, and whether the new 
head has eaten the apple. If the new head has collided with the body or the wall, 
end the game by calling the gameOver function. If the snake has eaten the apple, 
increase the score and move the apple to a new location
 */
Snake.prototype.checkCollision = function (head){
    var rightCollision = (head.col === widthInBlocks - 1);
    var leftCollision = (head.col === 0);
    var topCollision = (head.row === 0);
    var bottomCollision = (head.row === heightInBlocks - 1);

    var wallCollision = rightCollision || leftCollision || topCollision || bottomCollision;

    var selfCollision = false;

    for (var i = 0; i < this.segments.length; i++) {
        if (head.equal(this.segments[i])){
            selfCollision = true;
            //console.log('equal');
        }
    };

    return wallCollision || selfCollision;
};

/**Moving the Snake
To move the snake, add a new head segment (by adding a new block object to the 
beginning of the segments array) and then remove the tail segment from the end 
of the segments array.
*/
Snake.prototype.move = function () {
    var head = this.segments[0];
    var newHead;

    this.direction = this.nextDirection;

    if (this.direction === 'right'){
        newHead = new Block(head.col + 1, head.row);
    } else if(this.direction === 'left'){
        newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === 'up'){
        newHead = new Block(head.col, head.row - 1);
    } else if (this.direction === 'down'){
        newHead = new Block(head.col, head.row + 1);
    }

    if (this.checkCollision(newHead)){
        //console.log('Has collided!');
        gameOver();
        return;
    }

    this.segments.unshift(newHead);

    if(newHead.equal(apple.position)){
        score++;
        apple.move();
    } else {
        this.segments.pop();
    }
};

/**
 * The setDirection method checks whether the player is trying to make an illegal turn. 
 * If they are, the method uses return to end early; otherwise, it updates the 
    nextDirection property on the snake object.
*/
Snake.prototype.setDirection = function (newDirection) {
    if(this.direction === 'up' && this.newDirection === 'down'){
        return;
    } else if(this.direction === 'right' && this.newDirection === 'left'){
        return;
    } else if(this.direction === 'left' && this.newDirection === 'right'){
        return;
    } else if(this.direction === 'down' && this.newDirection === 'up'){
        return;
    };
    this.nextDirection = newDirection;
};


/**Creating the Apple
 * The apple is represented as an object with three components: 
    * a position property, which holds the apple’s position as a block object; 
    * a draw method, used to draw the apple; and 
    * a move method, used to give the apple a new position once it’s been eaten 
    by the snake.
*/
//Apple constructor
var Apple = function () {
    this.position = new Block(10, 10);
};



//Drawing the apple
Apple.prototype.draw = function () {
    this.position.drawCircle('Green');
};

//Moving the apple
Apple.prototype.move = function () {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
};




var snake = new Snake();
var apple = new Apple();

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


// Convert keycodes to directions
var directions = {
    37 : 'left',
    38 : 'up',
    39 : 'right',
    40 : 'down',
    //13 : 'left',
    //16 : 'stop'
};

//keyboard events handler
$('body').keydown(function (event){
    var newDirection = directions[event.keyCode];
    if (newDirection !== undefined){
        snake.setDirection(newDirection);
    }
});
