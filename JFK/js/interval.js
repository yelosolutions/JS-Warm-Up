/*
Using setInterval  - it repeatedly calls the supplied function after
regular pauses, or intervals
*/

var counter = 0;

var printMessage = () => {
        console.log(counter + " seconds have passed");
        counter++;
    }
var intervalId = setInterval(printMessage, 1000);

clearInterval(intervalId);

