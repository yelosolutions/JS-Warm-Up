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



//a Car constructor that creates multiple car objects
var Car = function (x, y){
    this.x = x;
    this.y = y;

    /*DRAWING IN THE CAR CONSTRUCTOR
    Add a call to the draw method from inside the Car constructor so that car 
    objects automatically appear in the browser as soon as you create them.
     */
    this.draw = Car.prototype.draw();
};



/**
 * Add a new method called draw to Car.prototype, this makes the draw method 
 * part of all of the objects created by the Car constructor.
 */
Car.prototype.draw = function () {
    var carHtml = '<img src="./car.png">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    })
    $('body').append(this.carElement);
};

Car.prototype.moveRight = function () {
    this.x += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveLeft = function () {
    this.x -= 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveUp = function () {
    this.y -= 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveDown = function () {
    this.y += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};



var tesla = new Car(10, 20);

//var mercedes = new Car(100, 200);
//mercedes.draw();


