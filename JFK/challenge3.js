/*
How would you get the number 123 out of this object using one line of JavaScript? 
Try it out in the console to see if you’re right.
*/
var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

//solution
console.log( myCrazyObject["some array"][2].number); 