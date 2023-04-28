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


// The Ball constructor
var Ball = function() {
    this.x = width / 2;
    this.y = height / 2;

    this.xSpeed = 5;
    this.ySpeed = 0;

    //#2: CONTROLLING THE SPEED
    this.speed = 5;
    this.radius = 3;
}

Ball.prototype.draw = function () {
    circle(this.x, this.y, this.radius, true);
};

// Update the ball's position based on its speed
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    /*
    *#1: BOUNCING OFF THE WALLS
    * Modify the code so the ball bounces off the side and top walls instead of 
    * wrapping around to the other side. 
    * Hint: Just reverse the direction when the ball hits the wall.
    */
    if(this.x < 0 || this.x > width){
        this.xSpeed = -this.xSpeed;
    }
    if(this.y < 0 || this.y > height){
        this.ySpeed = -this.ySpeed;
    };

};

Ball.prototype.setDirection = function(direction){
    if (direction === 'left'){
        this.xSpeed = -this.speed;
        this.ySpeed = 0;
    } else if (direction === 'up'){
        this.xSpeed = 0;
        this.ySpeed = -this.speed;
    } else if (direction === 'right'){
        this.xSpeed = this.speed;
        this.ySpeed = 0;
    } else if (direction === 'down'){
        this.xSpeed = 0;
        this.ySpeed = this.speed;

    }else if (direction === 'stop'){
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
};

/**#2: CONTROLLING THE SPEED
    The ball currently moves 5 pixels for every step of the animation. This is because 
    setDirection always sets xSpeed or ySpeed to -5 or 5. Create a new property in 
    the Ball constructor called speed and set it to 5. Then use this instead of 
    the number 5 in setDirection. Now, change your code so that you can use the number 
    keys to set the speed from 1 to 9. Hint: Create an object called speeds, and use 
    it to determine the new speed, if any, based on the keydown event.
*/


Ball.prototype.setSpeed = function(speed){
    if (speed === 'one'){
        this.speed = 1;
        //this.xSpeed = this.speed;
        //this.ySpeed = this.speed;
    } else if (speed === 'two'){
        this.speed = 2;
        //this.xSpeed = this.speed;
        //12this.ySpeed = this.speed;
    } else if (speed === 'three'){
        this.speed = 3;
    } else if (speed === 'four'){
        this.speed = 4;
    }else if (speed === 'five'){
        this.speed = 5;
    }else if (speed === 'six'){
        this.speed = 6;
    } else if (speed === 'seven'){
        this.speed = 7;
    } else if (speed === 'eight'){
        this.speed = 8;
    } else if (speed === 'nine'){
        this.speed = 9;
    }
};




/**
 * #3: FLEXIBLE CONTROLS
    Modify your code so that when you press the Z key, the ball slows down, and when 
    you press the X key, it speeds up. Once that’s working, use C to make the ball 
    smaller and V to make it larger. What happens if the speed goes below 0? 
    What about the size? Add a check in the code to make sure the speed and 
    size never go below 0.
 */
Ball.prototype.flex = function(action){
    if(action === 'grow'){
        this.radius += 1;
    } else if(action === 'shrink'){
        this.radius -= 1;
    };

    if(action === 'speedup'){
        this.speed += 1;
    } else if(action === 'slowdown'){
        this.speed -= 1;
    };

    if(this.speed < 1){
        this.speed = 1;
    };

    if (this.radius < 1){
        this.radius = 1;
    };
}

// An object to convert keycodes into control actions
var flexibleControls = {
    90: 'slowdown',
    88: 'speedup',
    67: 'shrink',
    86: 'grow'
};



// An object to convert keycodes into action names
var keyAction = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    13: 'enter',
    32: 'stop'
};

var speeds = {
    49: 'one',
    50: 'two',
    51: 'three',
    52: 'four',
    53: 'five',
    54: 'six',
    55: 'seven',
    56: 'eight',
    57: 'nine',
};


// Create the ball object
var ball = new Ball();

// The keydown handler that will be called for every keypress
$('body').keydown(function (event) {
    console.log(keyAction[event.keyCode] + " : " + event.keyCode + "\n" +
    speeds[event.keyCode] + " : " + event.keyCode + "\n" +
    flexibleControls[event.keyCode] + " : " + event.keyCode);

    ball.setDirection(keyAction[event.keyCode]);
    ball.setSpeed(speeds[event.keyCode]);
    ball.flex(flexibleControls[event.keyCode]);
});

// The animation function, called every 30 ms
var animateBallId = setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
}, 30);

clearInterval(animateBallId);

/**Running the Code
 * Now our program is complete. When you run the program, you should see a 
    black ball moving across the canvas to the right. 
 * When it reaches the right side of the canvas, it should wrap around to the 
    left side and keep moving to the right. When you press the arrow keys, the ball
    should change direction, and pressing the spacebar should make the ball stop.
 */




