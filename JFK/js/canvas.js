//A DOM object returned by the method is assigned to the canvas variable  
var canvas = document.getElementById('canvas');

/*GET THE DRAWING CONTEXT by using the getContext method on canvas 
and pass it the '2d' argument to specify that we want to draw a 2d image. 
*/
var ctx = canvas.getContext('2d');

/*draw rectangles on the canvas by CALLING THE METHOD fillRect on the
drawing context.
*/
ctx.fillStyle = "green";
var colorScheme = ["GoldenRod", "Peru", "Cyan", "Blue", "Yellow", "Red"]

/*
for(var i = 0; i < colorScheme.length; i++){
    ctx.fillStyle = colorScheme[i];
    ctx.fillRect(i * 50 , 0, 50, 90);
};

The strokeRect method takes the same arguments as fillRect: first the x- 
and y-coordinates of the top-left corner, followed by the width and height 
of the rectangle.
Use the strokeStyle property to change the color of the rectangle’s outline. To change the thickness of
the line, use the lineWidth property
*/

for(var i = 0; i < colorScheme.length; i++){
    ctx.strokeStyle = colorScheme[i];
    ctx.lineWidth = 4;
    ctx.strokeRect(i * 50 , 0, 50, 90);
};

// drawing a little robot using the fillRect method.
ctx.fillStyle = "grey";

var square = ctx.fillRect(100, 100, 50, 50);
var rectangle = ctx.fillRect(120, 150, 10, 30);
var rectangle2 = ctx.fillRect(50, 180, 150, 10);
var square = ctx.fillRect(90, 190, 70, 70);
var rectangle3 = ctx.fillRect(90, 260, 10, 50);
var rectangle4 = ctx.fillRect(150, 260, 10, 50);


ctx.strokeStyle = "grey";
ctx.lineWidth = 4;



var square = ctx.strokeRect(290, 130, 20, 20);



/**
 * Try drawing this happy stickman using the beginPath, moveTo, lineTo, 
 * and stroke methods. You can use the strokeRect method for the head. 
 * The head is a 20-pixel-by-20-pixel square, and the line width is 4 pixels.
 */
ctx.beginPath();
ctx.moveTo(300, 150);
ctx.lineTo(300, 210);

ctx.moveTo(300, 190);
ctx.lineTo(250, 150);

ctx.moveTo(300, 190);
ctx.lineTo(360, 150);

ctx.moveTo(300, 210);
ctx.lineTo(250, 280);

ctx.moveTo(300, 210);
ctx.lineTo(360, 280);
ctx.stroke();


/**
 * To fill a closed path with color instead of just drawing an outline, 
 * you can use the fill method instead of stroke. 
 * Example: a simple grey house
 */
ctx.beginPath();
ctx.moveTo(300, 5);
ctx.lineTo(240, 75);
ctx.lineTo(240, 125);
ctx.lineTo(360, 125);
ctx.lineTo(360, 75);
ctx.lineTo(300, 5);
ctx.fill();

/**To draw a circle, you set the circle’s center coordinates and radius 
and tell JavaScript how much of the circle to draw by providing a starting 
angle and ending angle as arguments.
We pass false for the final argument, which tells arc to draw in a clockwise direction. 
*/
ctx.beginPath()
ctx.arc(400, 100, 20, 0, Math.PI * 2, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 160, 20, 0, Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 220, 20, 0, Math.PI * 3/2, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 280, 20, 0, Math.PI / 2, false);
ctx.stroke();

/**
 * a function to draw circles that lets us ignore (PI and direction) so 
 * that we have to supply only the x, y, and radius arguments. 
 */
var drawCircle = function (x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.stroke();
}

/**How would you modify our circle function to make it fill the 
circle instead of outline it? Add a fourth argument, a Boolean, that says
whether the circle should be filled or outlined. Passing true indicates 
that you want the circle to be filled. You can call the argument fillCircle.
Using your modified function, draw this snowman, using a mix of outlined 
and filled circles
*/
var circle = function (x, y, radius, filled){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(filled){
        ctx.fill();
    } else{
        ctx.stroke();
    }
}


//draw a snowman, using a mix of outlined and filled circles
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
circle(500, 300, 30, false);
circle(490, 295, 3, true);
circle(510, 295, 3, true);

circle(500, 372, 40, false);
circle(500, 370, 3, true);
circle(500, 380, 3, true);
circle(500, 390, 3, true);

ctx.fillStyle = "goldenrod";
circle(500, 305, 3, true);




//draws concentric circles with varying radii
var randomColor = Math.floor(Math.random() * colorScheme.length);
var radius = 10
for(var i = 0; i < colorScheme.length; i++){
    var randomColor = Math.floor(Math.random() * colorScheme.length);
    ctx.strokeStyle = colorScheme[randomColor];
    drawCircle(500, 100, radius);
    radius += 10;
};


