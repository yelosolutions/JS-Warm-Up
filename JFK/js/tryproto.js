/*PROTOTYPES
Use the constructor property -prototype- to enable creation of multiple car 
objects that share the draw method.
*/

var Car = function (x, y) {
    this.x = x;
    this.y = y;

    /*a call to the draw method from inside the Car constructor so that car 
    objects automatically appear in the browser as soon as you create them.
    */
    //this.draw = Car.prototype.draw();
    this.speed = 5;
}

//display a car object
Car.prototype.draw = function () {
    var carHtml = '<img src="./car.png">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: 'absolute',
        left: this.x,
        top: this.y
    });
    $('body').append(this.carElement);
}

//move the car object 5px to the Right direction 
Car.prototype.moveRight = function (speed) {
    this.speed = speed;
    this.x += this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
}


//move the car object 5px to the Left direction 
Car.prototype.moveLeft = function (speed) {
    this.speed = speed;
    this.x -= this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
}

//move the car object 5px to the Down direction 
Car.prototype.moveDown = function (speed) {
    this.speed = speed;
    this.y += this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
}

Car.prototype.moveUp = function (speed) {
    this.speed = speed;
    this.y -= this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
}


//initiate a new car object using the Car constructor
var toyota = new Car(10, 30);
var bmw = new Car(10, 100);
toyota.draw();
bmw.draw();