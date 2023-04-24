/**
 * Trying to implement the bouncing ball solo
 */

//get canvas element using a DOM method
var canvas = document.getElementById('canvas');

//#1: BOUNCING THE BALL AROUND A LARGER CANVAS
var width = canvas.width;
var height = canvas.height;

//create a drawing context
var ctx = canvas.getContext('2d');

//specify the width of lines in the drawing context
ctx.lineWidth = 2;
//specify the color of strokes in the drawing context
ctx.strokeStyle = 'Black';

//#2: For RANDOMIZING THIS.XSPEED AND THIS.YSPEED
var update = function (coordinate) {
    return Math.random() * 10 - 5;
}
//console.log(update(4));

//#4: MAKING THE BALLS COLORFUL
var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
var pickRandomColor = function (){
    return colors[Math.floor(Math.random() * colors.length)]
}


//a Ball constructor
var Ball = function () {
    this.x = 100;
    this.y = 100;

    //RANDOMIZING THIS.XSPEED AND THIS.YSPEED
    this.xSpeed = update(this.xSpeed);
    this.ySpeed = update(this.ySpeed);
    this.color = pickRandomColor();
};


//a circle function to create circles
var circle = function (x, y, r, filled) {
    ctx.beginPath();
    ctx.arc(x, y, r , 0,  Math.PI * 2, false);

    if(filled){
        ctx.fill();
    } else{
        ctx.stroke();
    }
}
//circle(20, 20, 10);

//a draw method of ball objects, possible throught use of prototype
Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true);
    ctx.fillStyle = this.color;
} 

//a move method of ball objects
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
}

//a collision control method of ball objects
Ball.prototype.controlCollision = function() {
    if(this.x < 0 || this.x > width){
        this.xSpeed = -this.xSpeed;
        //ctx.fillStyle = 'Gold';
    }
    if(this.y < 0 || this.y > height){
        this.ySpeed = -this.ySpeed;
        //ctx.fillStyle = 'Red';
    }
};


//#3: ANIMATING MORE BALLS
var balls = []
//create an array of 10 new ball objects
for(var i = 0; i < 10; i ++){
    balls[i] = new Ball();
    balls.push[balls[i]];
};

//run function repeatedly using set interval
var bounceBallId = setInterval(function () {
    ctx.clearRect (0, 0, width, height);
    for(var j = 0; j < balls.length; j++){
        //ctx.clearRect (0, 0, width, height);
        balls[j].draw();
        balls[j].move();
        balls[j].controlCollision();
    }
    ctx.strokeRect(0, 0, width , height);
}, 30);
clearInterval(bounceBallId);