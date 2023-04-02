var animals = [];
animals.push("Donkey");
animals.push("Sheep");
animals.push("Chicken");
animals.push("Cow");
animals.push("Camel");

var randomAnimal = animals[Math.floor(Math.random() * 5)];

//console.log(randomAnimal);

var bodyParts = ["leg", "nose", "lips", "hand"];
var adjectives = ["sticky", "tiny", "skinny", "smelly"];
var things = ["monkey", "rat", "mice", "chihwahwa"];
var animalParts = ["tail", "ears", "legs", "brain"]

//pick a random body part from the bodyParts array
var randomBodyPart = bodyParts[Math.floor(Math.random() * 4)];

//pick a random adjective from the adjectives array
var randomAdjective = adjectives[Math.floor(Math.random() * 4)];

//pick a random thing from the thing array
var randomThing = things[Math.floor(Math.random() * things.length)];

var randomAnimalPart = animalParts[Math.floor(Math.random() * 4)];

var randomInsult = "Your " + randomBodyPart + " looks like a " + randomAdjective + " " + randomThing;
var randomInsult1  = ["Your",  [randomBodyPart], "is more", [randomAdjective], "than a", [randomAnimal] + "'s", [randomAnimalPart] + "."].join(" ");

console.log(randomInsult);
console.log(randomInsult1);

var array = [3, 2, 1];
var str = [array[0],  "is bigger than",  array[1], "is bigger than ", array[2]].join(" ");
console.log(str);
