//using multiple returns instead of if...else

var medalForScore = (score) => {
    if (score < 3){
        return "Bronze";
    }
    if (score < 7){
        return "Silver";
    }
    return "Gold";
}

medalForScore(8)