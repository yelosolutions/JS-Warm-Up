const model = ['android', 'AI', 'Neo-AI'];

function createRobot () {
    let robotName = 'R2D2';
    let robotAge = 30;
    console.log("Initializing", robotName, "... I was first programmed ", robotAge, "years ago." )
    console.log(name, ", Welcome sir, It has been" , robotAge, "years! Today\'s date is 7/8/2040")
    if (robotAge <= 10 ) {
        console.log("I am the new model, you know ", model[2])
    } else if(robotAge <= 20){
        console.log("When we were first created, humans thought we were going to replace them, we are ", model[1])
    }
    
    else {
        console.log("My name is ", robotName, "and I am an ", model[0])
    };
};
createRobot();

const toUpper = (text) => {
    const upperCase = text.toUpperCase();
    console.log(upperCase)
}
toUpper('kamau')

const sayHEllo = () => {
    console.log(name, "says, Hello!")
}
sayHEllo();

