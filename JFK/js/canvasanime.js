//create the canvas
var canvas = document.getElementById("canvas");

//create the drawing context
var ctx = canvas.getContext("2d");


//MOVING SQUARE
//create the variable 'position' and set it to 0
var position = 0;
//using canvas and setInterval to draw a square and move it slowly across a page.
var moveSquareId = setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);
    ctx.fillRect(position, 0, 20, 20);
    position++;
    if(position > 200){
        position = 0;
        ctx.clearRect(200, 0, 200, 200);
    }
}, 30);
clearInterval(moveSquareId);


//GROWING SQUARE
//create the variable 'size' and set it to 0
var size = 0;

/*using canvas and setInterval to draw a square that increases in 
size exponentially across a page.
*/
var growSquareId  = setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);
    ctx.fillRect(0, 0, size, size);

    /**
     * In each step of this animation, size is incremented by 1 and 
     * the width and height of the square grow by 1 pixel.
     */
    size++;
    if(size > 200){
        size = 0;
    }
}, 30);
clearInterval(growSquareId);
