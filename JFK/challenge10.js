/*
Write a function called areArraysSame that takes two arrays of numbers 
as arguments. 
It should return true if the two arrays are the same 
(that is, they have the same numbers in the same order) and false if
they’re different.
*/

var areArraysSame = (array1, array2) => {
    for (var i = 0; i < array1.length; i++){
        if (array1.length === array2.length && array1[i] === array2[i]){
            return true;
        }
        return false;
    }
};
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));