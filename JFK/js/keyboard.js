/**Controlling Animations with the KEYBOARD
 * Add some interactivity by making canvas animations respond when 
    a user presses a key on the keyboard.
 * For example, instead of just having a ball bounce across a screen, 
    a player can control the movement of the ball using the arrow keys.
 */

//set up the canvas and the context object
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var height = canvas.height;
var width = canvas.width;

ctx.lineWidth = 2;
ctx.strokeStyle = "Black";

//ctx.strokeRect(0, 0, width, height);

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


//Creating the Ball Constructor
var Ball = function () {
    this.x = width / 2;
    this.y = height/ 2;

    this.xSpeed = 5;
    this.ySpeed = 0;
};


Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x < 0){
        this.x = width;
    } else if(this.x > width){
        this.x = 0;
    }
    if(this.y < 0){
        this.y = height;
    } else if(this.y > height){
        this.y = 0;
    }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true);
}

Ball.prototype.setDirection = function(direction) {
    if(direction === 'up'){
        this.xSpeed = 0;
        this.ySpeed = -5;
    } else if(direction == 'down'){
        this.xSpeed = 0;
        this.ySpeed = 5;
    } else if(direction === 'left'){
        this.xSpeed = -5;
        this.ySpeed = 0;
    } else if(direction === 'right'){
        this.xSpeed = 5;
        this.ySpeed = 0;
    } else if(direction === 'stop'){
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
};

var ball = new Ball();


/*Use the -keydown- event, which is triggered whenever a user presses a key, 
and use jQuery to add an event handler to the -keydown- event.
*/


//a keyNames object matches keycodes to corresponding labels
var keyActions = {
    37: "left",
    38: "up", 
    39: "right",
    40: "down",
    13: "stop",
    16: "ENTER", 
    18: "ALT"
}

//ctx.clearRect(0, 0, 200, 200);
//ctx.strokeRect(0, 0, 200, 200);

/*Use the keyNames object in the keydown event handler to get the name 
of the key that was just pressed
*/
$('body').keydown(function (event) {
    //console.log(keyNames[event.keyCode] + ":" + event.keyCode);
    var direction = keyActions[event.keyCode]
    ball.setDirection(direction);
});

//Animating the Ball
var animateBallId = setInterval( function () {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
});

clearInterval(animateBallId);
//ctx.beginPath();
//ctx.stroke();
