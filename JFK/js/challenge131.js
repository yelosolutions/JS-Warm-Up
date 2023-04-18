/*FOLLOW THE CLICKS 
Modify the previous mousemove program so that instead of following 
your mouse, the heading will follow just your clicks. Whenever you 
click the page, the heading should move to the click location.


$("html").click(
    function (event) {
        $("#main-heading").offset({
            left: event.pageX,
            top: event.pageY
        })
    }
)

*/

/* CREATE YOUR OWN ANIMATION
Use setInterval to animate an h1 heading element around the page, 
in a square. It should move 200 pixels to the right, 200 pixels down,
200 pixels to the left, 200 pixels up, and then start again. Hint:
You’ll need to keep track of your current direction (right, down, left, or up) 
so that you know whether to increase or decrease the left or top offset of 
the heading. You’ll also need to change the direction when
you reach a corner of the square.

*/

var leftPos = 0;
var topPos = 0;
var direction = 'right'

var animateH1 = () =>{
    if (direction === 'right'){
        $("#main-heading").offset({
            left: leftPos += 200
        })
        direction = 'down';
    } else if (direction === 'down'){
        $("#main-heading").offset({
            top: topPos += 200
        })
        direction = 'left';
    } else if (direction === 'left'){
        $("#main-heading").offset({
            left: leftPos -= 200
        })
        direction = 'up';
    } else if (direction === 'up'){
        $("#main-heading").offset({
            top: topPos -= 200
        })
        direction = 'right';
    }
}




/*
#3: Cancel an Animation with a Click
Building upon Challenge #2, add a click handler to the moving h1 element 
that cancels the animation. Hint: You can cancel intervals with the clearInterval 
function.
#4: MAKE A “CLICK THE HEADER” GAME!
Modify Challenge #3 so that every time a player clicks the heading, instead of 
stopping, the heading speeds up, making it harder and harder to click. 
Keep track of the number of times the heading has been clicked and update the 
heading text so it shows this number. When the player has reached 10 clicks,
stop the animation and change the text of the heading to “You Win.” 
Hint: To speed up, you’ll have to cancel the current interval and then start a 
new one with a shorter interval time.
*/
var speed = 1000;
var clicks = 0;
var intervalId =  setInterval(animateH1, speed);
$("#main-heading").click(function (event) {
    clicks++;
    $("#main-heading").text('Clicks: ' + clicks);
    clearInterval(intervalId);
    speed -= 50;
    intervalId =  setInterval(animateH1, speed);
    if(clicks >= 5 ){
        clearInterval(intervalId);
        $("#main-heading").text("You win");
    }
});



//var intervalId = setInterval(animateH1, intervalTime);