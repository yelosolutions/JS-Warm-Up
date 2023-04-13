var jay = {name: "Jay", age: 24, passion: ["art", "coding"]};
var guru = {name: "Guru", age: 25, passion: ["photography", "agribiz"]};
var izo = {name: "Izo", age: 24, passion: ["music", "art"]};

var friends = [jay, guru, izo];
//console.log(friends[1].passion[0]);

var owedMoney = {};
owedMoney.jane = 7;
owedMoney.kim = 6;
owedMoney.njoki = 12;

owedMoney["jane"] += 4;
//console.log(owedMoney)

var movies = {};
var findingNemo = {
    releaseDate: 2003,
    duration: 100,
    actors:  ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
};
var starWars = {
    releaseDate: 1983,
    duration: 134,
    actors:  ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
};
var harryPorter = {
    releaseDate: 2005,
    duration: 157,
    actors:  ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blue-ray"
};
var cars = {
    releaseDate: 2006,
    duration: 117,
    actors:  ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    format: "DVD"
};

movies["Finding Nemo"] = findingNemo;
movies["Star Wars: Episode VI - Return of the Jedi"] = starWars;
movies["Harry Potter and the Goblet of Fire"] = harryPorter;
movies["Cars"] = cars;

movieTitles = Object.keys(movies)
console.log(movieTitles)