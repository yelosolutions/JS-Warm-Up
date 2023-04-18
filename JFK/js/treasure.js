/*
Web page to display treasure map(image)
Pick single pixel location to represent the buried treasure
Click handler, on click: 
1. Add 1 to a click counter
2. Calculate distance from click to hidden treasure 
3. Display message 'cold, hot or warm', relative to the hidden treasure
4. When treasere location(or near it) is clicked congratulate the player.
*/

//get random numbers
var getRandomNumber = (size) => {
    return Math.floor(Math.random() * size)
};

//Calculate the distance between the click event and the target
var getDistance = (event, target) => {
    var changeInX = event.offsetX - target.x;
    var changeInY = event.offsetY - target.y;
    return Math.sqrt( (changeInX * changeInX) + (changeInY * changeInY))
}

//Display message 'cold, hot or warm', relative to the hidden treasure
var getDistanceHint = (distance) => {
    if (distance < 20) {
        return "Boiling hot!";
    } else if (distance < 40) {
        return "Really hot";
    } else if (distance < 80) {
        return "Hot";
    } else if (distance < 160) {
        return "Warm";
    } else if (distance < 320) {
        return "Cold";
    } else if (distance < 640) {
        return "Really cold";
    } else if (distance < 720) {
        return "Really really cold";
    } else {
        return "Freezing!";
    }
};

//set up the size variables
var width = 800;
var height = 800;

//set up th clicks counter variable
var clicks = 0;

var limit = 20;
//var remainingClicks = limit - clicks;

//pick a random spot on map to hide the treasure
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(width)
};
//console.log(target);

//Create a click handler on the '#map' element
$('#map').click( function (event) {
    //Add 1 to a click counter
    clicks += 1;
    
    //Number of remaining click till game over
    var remainingClicks = limit - clicks;

    //ADDING A CLICK LIMIT
    if(clicks > limit){
        alert("GAME OVER")
    }
    
    //Call the getDistance function, returns distance
    var distance = getDistance(event, target);

    //Call the getDistanceHint function, returns distance hint.
    var distanceHint =  getDistanceHint(distance);

    /*
    Update the '#distance' element with distance hints and
    show the number of remaining clicks
    */
    $('#distance').text(distanceHint + " : " + remainingClicks + " clicks  remaining");

    //Congratulate the player if they click the target or near it
    if (distance < 10){
        alert("Congratulations! Treasure found, after \n" +  clicks + " clicks")
    };

    

    console.log("The treasure is located at " + target.x + ":"+ target.y + 
    " around " + distance + " px away");
});



