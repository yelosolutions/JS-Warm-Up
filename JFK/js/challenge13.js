/*
CREATE YOUR OWN ANIMATION
Use setInterval to animate an h1 heading element around the page, 
in a square. It should move 200 pixels to the right, 200 pixels down, 
200 pixels to the left, 200 pixels up, and then start again. Hint:
You’ll need to keep track of your current direction (right, down, left, or up) 
so that you know whether to increase or decrease the left or top offset 
of the heading. You’ll also need to change the direction when you reach 
a corner of the square.
*/

//var leftMove = 200;
//var leftMove = 200;
var rightPos = 0;
var topPos = 0;
var direction = 'right';

var animateHeading = () => {
    if(direction === 'right'){
        $("#main-heading").offset({
            left: rightPos += 200
        });
        direction = 'down';
    } else if (direction ==='down') {
        $("#main-heading").offset({
            top: topPos += 200
        });
        direction = 'left';
    } else if (direction ==='left') {
        $("#main-heading").offset({
            left: rightPos -= 200
        });
        direction = 'up';
    } else if (direction ==='up') {
        $("#main-heading").offset({
            top: topPos -= 200
        });
        direction = 'right';
    }
};  
var intervalId = setInterval(animateHeading, 1000);

clearInterval(intervalId);
