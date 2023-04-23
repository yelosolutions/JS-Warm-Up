/*A RANDOM BEE
Make a bee that flies randomly around the canvas
*/

//create the canvas
var canvas = document.getElementById("canvas");

//create the drawing context
var ctx = canvas.getContext("2d");

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

/*
The drawBee function uses the circle function
to draw a bee at the coordinates specified by its x and y arguments.
*/
var drawBee = function (x, y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
}
//drawBee(20, 20);

//Updating the Bee’s Location
var update = function (coordinate){
    //Changing the Coordinate with an Offset Value
    var offset = Math.random() * 4 - 2;
    coordinate += offset;

    //Checking if the Bee Reaches the Edge
    if(coordinate > 200){
        coordinate = 200;
    } else if (coordinate < 0){
        coordinate = 0;
    }
    return coordinate;
};



//Creating variables x and y, the coordinates(initial position of bee)
var x = 100;
var y = 100;

//Animating a Buzzing Bee
var animateBeeId = setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);

    //Updating the Coordinates
    drawBee(x, y);

    //change x by a small, random amount.
    x = update(x);
    y = update(y);

    ctx.strokeRect(0, 0, 200, 200);
}, 30);

//cancel the setInterval function
clearInterval(animateBeeId);
