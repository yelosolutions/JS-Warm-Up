/*
Using setTimeout to delay the execution of a function
*/
var countDown = () => {
    alert("Time's Up!");
}
var timeoutId  = setTimeout(countDown, 1000);
clearTimeout(timeoutId);