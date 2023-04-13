/*
Write a function called areArraysSame that takes two arrays of numbers 
as arguments. 
It should return true if the two arrays are the same 
(that is, they have the same numbers in the same order) and false if
they’re different.
*/

var areArraysSame = (array1, array2) => {
    var answerArray = [];
    if (array1.length !== array2.length){
        return "The array sizes are different";
    }
    for (var i = 0; i < array1.length; i++) {
        var answer = array1[i] === array2[i];
        answerArray.push(answer);
        if (answerArray[i] != true){
            return false;
        }
    }
    return true;
    
}
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));