/*
Create an array containing the names of a few friends. 
Using a for loop, create a p element for each of your friends 
and add it to the end of the body element using the jQuery append method. 
Use jQuery to change the h1 element so it says My friends instead of Hello world!. 
Use the hide method followed by the fadeIn method to fade in each name as it’s provided.
Now, modify the p elements you created to add the text smells! after each friend. 
Hint: If you select the p elements using $("p"), the append method will apply to all the p elements.
*/

//an array of friends
var myFriends = ["Izo", "Guru", "Mugita", "Alulu"];

//a loop that adds friends' names as p elements inside the body of HTML
for(var i = 0; i < myFriends.length; i++){
    $("body").append("<p>" + myFriends[i] + "</p>");
    
    //Using the hide method followed by the fadeIn method to fade in each name.
    $("p").hide().fadeIn(2000);
};
""
$("p").append(" smells");

/*
Using jquery's $ function and text method to change the text in the h1 element 
with id 'main-heading'
*/
var newHeadingText = "My friends";
$("#main-heading").text(newHeadingText);

$("h2")

/*
A loop to flash h1 using  fadeOut and fadeIn over different 
times(over 1 second the first time and so on ...)
*/
for(var i = 0; i < 5; i++){
    var timer = 1000;
    while (i < 5 ){
        $("h1").fadeOut(timer).fadeIn(timer);
        timer += 1000;
        i++;
    }
};



