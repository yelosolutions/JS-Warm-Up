var pickWord = () => {
    var words = [
        "monkey",
        "dog",
        "chicken",
        "jaba",
        "javascript",
        "pilot"
    ];
    return words[Math.floor(Math.random() * words.length)];
}

var word = pickWord();
console.log(word)