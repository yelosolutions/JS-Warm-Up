var canvas  = document.getElementById('canvas');
var width = canvas.width;
var height = canvas.height;

var ctx = canvas.getContext('2d');

ctx.strokeStyle = "Black";

var circle = function (x, y, radius, fill) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(fill){
        ctx.fill();
    } else{
        ctx.stroke();
    };
};

var Ball = function() {
    this.x = 100;
    this.y = 100;

    this.xSpeed = 5;
    this.ySpeed = 0;
}

Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true);
}

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.x += this.xSpeed;
}

var ball = new Ball();
ball.draw();


