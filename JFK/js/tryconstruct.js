/*CONSTRUCTOR
JavaScript prototypes make it easy to share functionality (as methods) between 
different objects. All constructors have a prototype property, and we can add methods to it. 
Any method that we add to a constructor’s prototype property will be available as a method to 
all objects created by that constructor.

The SYNTAX for adding a draw method to a prototype property(of the Car constructor):
Car.prototype.draw = function (){
    --the body of the method goes here
}
*/

//create a constructor(Car) to enable creation of multiple car objects that share methods
var Car = function (x, y) {
    this.x = x;
    this.y = y;
}

//display a car object
var drawCar = function (car) {
    var carHtml = '<img src="./car.png">';
    var carElement = $(carHtml);
    carElement.css({
        position: 'absolute',
        left: car.x,
        top: car.y
    });
    $('body').append(carElement);
}

//initiate a new car object using the Car constructor
var toyota = new Car(10, 50); 

//call the drawCar function 
drawCar(toyota);