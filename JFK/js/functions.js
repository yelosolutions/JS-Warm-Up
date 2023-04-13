//random insults but with functions

var generateInsult = () => {
    var animals = ["chicken", "goat", "cow", "baboon", "camel"];
    var adjectives = ["stupid", "noisy", "fat", "dirty", "smelly"];
    var bodyParts = ["head", "neck", "hands", "belly", "legs"];


    var pickRandomWord = (words) =>{
        return (words[Math.floor(Math.random() * words.length)]);
    };

    var randomInsult = "Your " + pickRandomWord(bodyParts) + 
    " looks like a " + pickRandomWord(adjectives) + " " + pickRandomWord(animals);

    return randomInsult;
};
console.log(generateInsult());