var alphabet = "abcdefghijklmnopqrstuvwxyz";

randomString = "";

while(randomString.length < 6){
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
}
console.log(randomString);