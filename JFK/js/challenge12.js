/*
Modify the previous mousemove program so that instead of 
following your mouse, the heading will follow just your clicks. 
Whenever you click the page, the heading should move to the 
click location.
*/

//allows the mouse to be clicked anywhere in the html page
$("html").click( function (event) {
    //makes the heading element with given id to move where mouse is clicked
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    })
}
);