//create the canvas
var canvas = document.getElementById("canvas");

//create the drawing context
var ctx = canvas.getContext("2d");

//create the variable 'position' and set it to 0
//var position = 0;


/*/using canvas and setInterval to draw a square and move it slowly across a page.
setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);
    ctx.fillRect(position, 0, 20, 20);
    position++;
    if(position > 200){
        position = 0;
        ctx.clearRect(200, 0, 200, 200);
    }
}, 30);

*/
//create the variable 'size' and set it to 0
var size = 0;

/*using canvas and setInterval to draw a square that increases in 
size exponentially across a page.
*/
//var intervalId  = setInterval(function () {
    //ctx.clearRect(0, 0, 200, 200);
    //ctx.fillRect(0, 0, size, size);

    /**
     * In each step of this animation, size is incremented by 1 and 
     * the width and height of the square grow by 1 pixel.
     */
    //size++;
    //if(size > 200){
      //  size = 0;
    //}
//}, 30);
//clearInterval(intervalId);



var circle = function (x, y, radius, filled){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(filled){
        ctx.fill();
    } else{
        ctx.stroke();
    }
}

ctx.lineWidth = 4;
ctx.fillStyle = "goldenrod";
var drawBee = function (w, z, r) {
    circle(w, z, r, false);
    circle(w + 16, z, r, false);
    ctx.fillStyle = "goldenrod";
    circle(w + 8, z + 22, r * 2, true);
    circle(w + 8, z + 22, r * 2, false);
    circle(w + 4, z + 20, r / 2, false);
    circle(w + 12, z + 20, r / 2, false);
}
//drawBee();

var position = 0;
var animateBeeId = setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);
    drawBee(position, 10, 8);
    position++;
    if(position>200){
        position = 0;
    }
}, 30);
clearInterval(animateBeeId);

/*ctx.beginPath();
ctx.moveTo(10, 10)
ctx.lineTo(40, 10)
ctx.lineTo(40, 40)
ctx.lineTo(10, 40)
ctx.lineTo(10, 10)
ctx.stroke()
*/