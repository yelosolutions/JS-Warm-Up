
//the && boolean operation(AND)
var studentName = "Jay";
var hasApples = true;
var hasOranges = false;
if (hasApples && hasOranges === true) {
    console.log("The schools diet plan requires atleast one fruit")
}
else {
    console.log("Lucky you ", studentName, ", atleast you have one fruit")
};

//the || boolean operation(OR)
var mathPass = false;
var englishPass = false;
if (englishPass || mathPass == true){
    var pass = true;
    if (pass === true){
        console.log("Congratulations", studentName, "! You have passed");
    }        
}
else {
    var fail = !pass;
    if( fail === !pass){
        console.log("Too bad!")
    }
}