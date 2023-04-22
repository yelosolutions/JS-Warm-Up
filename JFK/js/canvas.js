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
var colorScheme = ["GoldenRod", "Peru", "Cyan"]

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

ctx.beginPath();
ctx.moveTo(300, 10);
ctx.lineTo(240, 70);
ctx.lineTo(240, 130);
ctx.lineTo(360, 130);
ctx.lineTo(360, 70);
ctx.lineTo(300, 10);
ctx.fill();