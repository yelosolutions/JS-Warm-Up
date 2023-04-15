/*
Using setInterval to animate elements in a browser.
*/

//will be used later to position the heading
var leftOffset = 0;

//uses offset method to move h1 element
var moveH1 = () => {
    $("#btn").offset({left:leftOffset});
    
    leftOffset += 2;
    
    if(leftOffset > 200){
        leftOffset = 0;
    }
};
//var intervalId = setInterval(moveH1, 30);
//clearInterval(intervalId);


//moving a button after a click(trying it myself)
var changeInX = 0;
var changeInY = 0;
var moveBtn = () => {
    $("#btn").offset({left: changeInX});
    changeInX += 30;
    if (changeInX >= 60){
        changeInX -= 30;
    }
    $("#btn").offset({top: changeInY});
    changeInY += 30;
    if (changeInY >= 60){
        changeInY -= 30;
    }
}
//moveBtn()



//Responding to Clicks(as per JFK)
var clickHandler = (event) => {
    console.log("Click!" + event.pageX + " " + event.pageY);
}
/*When there is a click on the h1 element, 
call the clickHandler function and pass it the event object.
*/
$("h1").click(clickHandler);


/*The mousemove Event
$("html").mousemove(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });

});
*/

/*moving a h2 element across the page
type of event: mousemove
*/

$("html").mousemove( function (event){
        $("#heading").offset(
            {left: event.pageX, 
            top: event.pageY
//        })
    }
);

/* 
Alternative way of doing it:

var mouseMoveHandler = function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    })
};
$("html").mousemove(mouseMoveHandler);

*/
