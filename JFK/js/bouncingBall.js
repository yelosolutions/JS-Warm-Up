/**Bouncing a Ball!
 * Making a ball that bounces around the canvas. Whenever the ball hits 
 * one of the walls, it will bounce off at an angle, as a rubber ball would.
 */

/**PSEUDOCODE
 * Create a JavaScript object to represent our ball with a Ball constructor
    -will store the ball’s speed and direction using two properties, xSpeed 
    and ySpeed. 
    -The ball’s horizontal speed will be controlled by xSpeed, and the 
    vertical speed will be controlled by ySpeed.
 * 
 * 
 */

//a Ball constructor
//get the canvas element using DOM method
var canvas = document.getElementById('canvas');

//create the drawing context
var ctx = canvas.getContext('2d');

ctx.lineWidth = 2;
ctx.strokeStyle = "Black";


//create a Ball Constructor
var Ball = function () {
    //starting position of the ball
    this.x = 100;
    this.y = 100;

    //the ball’s horizontal(this.xSpeed), and vertical speed (this.ySpeed)
    this.xSpeed = -2;
    this.ySpeed = 3;
};

//a circle function to draw circles by fill or outline 
var circle = function (x, y, radius, filled){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(filled){
        ctx.fill();
    } else{
        ctx.stroke();
    }
}


/*Using the Constructor's property -prototype to enable the objects created
by the Ball constructor to add the draw method(creates a circle to rep ball object). 
*/
Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true);
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

//Make ball object to bounce off edges 
Ball.prototype.checkCollision = function () {
    //Negates this.xSpeed when ball hits right or left edges
    if(this.x < 0 || this.x > 200){
        this.xSpeed = -this.xSpeed;
    }
    //Negates this.xSpeed when ball hits top or bottom edges
    if(this.y < 0 || this.y > 200){
        this.ySpeed = -this.ySpeed;
    }
}

//create a ball object
var dimba = new Ball();

//use setInterval to call the function every 30 milliseconds
var moveBallId = setInterval( function () {
    //clear the canvas
    ctx.clearRect(0, 0, 200, 200);
    
    //draw the ball at its current x- and y-coordinates.
    dimba.draw();

    //update the position of the ball based on its xSpeed and ySpeed properties
    dimba.move();
    
    //update direction of ball if it hits the wall
    dimba.checkCollision();

    //draw line around the adge of the canvas(walls)
    ctx.strokeRect(0, 0, 200, 200);
}, 30);
clearInterval(moveBallId)

