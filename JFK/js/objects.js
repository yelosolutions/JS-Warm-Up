//1st way of adding key value pairs to an object
var book1 = {
    id: 1,
    title: "Count of Monte Christo",
    author: "Unknown",
};

//2nd way of adding key value pairs to an object
var book2 = {};
book2["id"] = 2;
book2["title"] = "The river and the source";
book2["author"] = "Margaret A. Agola";

//3rd way of adding key value pairs to an object
var book3 = {};
    book3.id = 3;
    book3.title =  "Kifo Kisimani";
    book3.author = "Ken Walibora";

console.log(book1)
console.log(book1.title);
console.log(Object.keys(book1))
    
console.log(book2)
console.log(book2.title);
    
console.log(book3)
console.log(book3.title);


//an array of objects
var books = [
    {id: 1,title: "Count of Monte Christo", author: "Unknown"},
    {id: 2, title: "The river and the source", author: "Margaret A. Agola"},
    {id: 3, title: "Kifo Kisimani", author: "Ken Walibora"},
];


console.log(books[1]["title"]);

var firstBook = books[0]; 
var secondBook = books[1];
var thirdBook = books[2];

console.log(firstBook)
console.log(firstBook.title);
console.log(Object.keys(firstBook))
