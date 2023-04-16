/*
Modify the previous mousemove program so that instead of 
following your mouse, the heading will follow just your clicks. 
Whenever you click the page, the heading should move to the 
click location.
*/

$("html").click( function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    })
}
);