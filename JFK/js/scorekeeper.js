var scores = {guru: 0, izo: 0, jay: 0, mugita: 0, alulu: 0};

var friendsNames = Object.keys(scores);

var friendsScores = [scores.guru, scores.izo, scores.jay, scores.mugita, scores.alulu];

console.log("This is how the scores look before the lucky draw:\n", 
scores, "\nThe lucky draw starts now ...\n\n");

var runDraw = () => {
    var luckyNumber = Math.floor(Math.random() * 5);

    var newScore = friendsScores[luckyNumber] += 10;

    for (var i = 0; i < friendsScores.length - 1; i++){
        if (i === luckyNumber) {
            scores[friendsNames[i]] = newScore;
            console.log("Congratulations " + friendsNames[i] 
            + "!! Your have scored: " + newScore + " points!"
            );
        }
    };
    scores[jay] = newScore;
    console.log("The following are the new results:\n ", scores);
}


setTimeout(runDraw, 3000);



