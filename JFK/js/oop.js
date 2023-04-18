//Object Oriented Programming - simple objects
var speak = function () {
    console.log( this.sound + " I am a " + this.name);
    if(this.isFierce){
        console.log("The rumors are " + this.isFierce + 
                    ", I can be a little intimidating");
    }else{
        console.log("The rumors are " + this.isFierce + 
                    ", you can play with me");
    }
};

var dog = {
    name: "Siba",
    breed: "Boarbell",
    age: 6,
    sound: "gghu!",
    isFierce: true,
    speak: speak
};


var cat = {
    name: "Siba",
    breed: "Boarbell",
    age: 1,
    sound: "meow!",
    isFierce: false,
    speak: speak
};
var snake = {
    name: "Amina",
    breed: "python",
    age: 1,
    sound: "ssss!",
    isFierce: true,
    speak: speak
};
var goat = {
    name: "Kipchoge",
    breed: "Dairy",
    age: 3,
    sound: "meeh!",
    isFierce: false,
    speak: speak
};

goat.speak();