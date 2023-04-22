var canvas = document.getElementById("canvas");
var drawCxt = canvas.getContext("2d");

/**
 * implement a function that draws a snowman at a specified location, 
 * so that calling this => drawSnowman(50, 50); would draw a snowman 
 * at the point (50, 50).
*/
var circle = function (x, y, radius, filled){
    drawCxt.beginPath();
    drawCxt.arc(x, y, radius, 0, Math.PI * 2, false);
    if(filled){
        drawCxt.fill();
    } else{
        drawCxt.stroke();
    }
}

var drawSnowman = function (w, z) {
    drawCxt.lineWidth = 4;
    drawCxt.strokeStyle = "black";
    drawCxt.fillStyle = "black";
    circle(w, z, 30, false);
    circle(w - 10, z-5, 3, true);
    circle(w + 10, z-5, 3, true);

    circle(w, z + 74, 40, false);
    circle(w, z + 55, 3, true);
    circle(w, z + 75, 3, true);
    circle(w, z + 95, 3, true);

    drawCxt.fillStyle = "goldenrod";
    circle(w, z + 5, 3, true);
};

drawSnowman(200, 200);

/**
 * Write a function that will take an array of points like this:
var points = [[50, 50], [50, 100], [100, 100], [100, 50],
[50, 50]];
drawPoints(points);
and draw a line connecting the points. In this example, the function would 
draw a line from (50, 50) to (50, 100) to (100, 100) to (100, 50) and back 
to (50, 50). Now use this function to draw the following points:
var mysteryPoints = [[50, 50], [50, 100], [25, 120],
[100, 50], [70, 90], [100, 90], [70, 120]];
drawPoints(mysteryPoints);
Hint: You can use points[0][0] to get the first x-coordinate and points[0][1] 
to get the first ycoordinate.
*/

var points = [[50, 50], [50, 100], [100, 100], [100, 50],
[50, 50]];
var mysteryPoints = [[50, 50], [50, 100], [25, 120],[100, 50], [70, 90], [100, 90], [70, 120]];


var drawPoints = function (points) {
    drawCxt.lineWidth = 4;
    drawCxt.strokeStyle = "black";
    for (var i=0; i < points.length; i++){
        drawCxt.beginPath();
        drawCxt.moveTo(points[i][0], points[i][1] );
        drawCxt.lineTo(points[i+1][0], points[i+1][1]);
        drawCxt.stroke();
    }
}

drawPoints(mysteryPoints);

/*
drawCxt.beginPath();
drawCxt.moveTo(50, 50);
drawCxt.lineTo(50, 100);
drawCxt.lineTo(25, 120);
drawCxt.lineTo(100, 50);
drawCxt.lineTo(70, 90);
drawCxt.lineTo(100, 90);
drawCxt.lineTo(70, 120);
drawCxt.stroke();
*/

