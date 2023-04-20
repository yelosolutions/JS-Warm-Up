/*CONSTRUCTOR
A JavaScript constructor is a function that creates objects and gives them a 
set of built-in properties and methods.
Anatomy of the Constructor
--------------------------
Each time you call a constructor, it creates an object and gives the new object 
built-in properties. To call a normal function, you enter the function name followed 
by a pair of parentheses. To call a constructor, you enter the keyword 
new (which tells JavaScript that you want to use your function as a constructor),
followed by the constructor name and parentheses.

The code new Car(10, 20) tells JavaScript to create an object 
using Car as a constructor, pass in the arguments 10 and 20 for its 
x and y properties, and return that object. We assign the returned object to
the tesla variable with var tesla.

var Car = function (name, model) {
    this.name = name;
    this.model = model;
};
var tesla = new Car('cybertruck', 'x50');
tesla;
*/

var Car = function (x, y) {
    this.x = x;
    this.y = y;
}; 

var drawCar = function (car){
    var carHtml = '<img src="./car.png">';
    var carElement = $(carHtml);
    carElement.css({
        position: "absolute",
        left: car.x,
        top: car.y
    })
    $('body').append(carElement);
};

var cars = []
var tesla = new Car(50, 20);
var mercedes = new Car(200, 20);
var toyota = new Car(350, 20);
var ferrari = new Car(500, 20);
var vitz = new Car(650, 20);
cars.push(tesla, mercedes, toyota, ferrari, vitz);

console.log(cars);
for(var i = 0; i < cars.length; i++){
    drawCar(cars[i]);
}

/*CONSTRUCTOR PROTOTYPES
JavaScript prototypes make it easy to share functionality (as methods) between 
different objects. All constructors have a prototype property, and we can add methods to it. Any method that we add to a
constructor’s prototype property will be available as a method to all objects created by that
constructor.

The SYNTAX for adding a draw method to a prototype property(of the Car constructor):
Car.prototype.draw = function (){
    --the body of the method goes here
}
*/






//console.log(tesla);

