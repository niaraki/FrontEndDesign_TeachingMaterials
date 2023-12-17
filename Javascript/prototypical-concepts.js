function Shape(color) {
  this.color = color;
  this.hello = function () {
    console.log("hello from the shape object");
  };
  this.duplicate = function () {
    console.log("Shape duplicate");
  };
}

Shape.prototype.draw = function () {
  console.log("Draw method of the shape called with color: ", this.color);
};
Shape.prototype.move = function () {
  console.log("Shape move");
};

function Circle(radius, color) {
  // Shape(color); // this would be window object
  Shape.call(this, color); // call the super constructor by linking it newly created object (this)

  this.radius = radius;
  this.duplicate = function () {
    console.log("Circle duplicate with radius ", this.radius);
  };
}

// reset the prototype of Circle to inherit prototype of shape
Circle.prototype = Object.create(Shape.prototype); // this line cause: CircleBase is changed to ShapeBase
Circle.prototype.constructor = Circle; //as best practice, when we reset prototype of an object, we should reset the constructor too

// a better method is to define a function to extend interition from parent
// This technique is called Intermediate Function Inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

//Constructor function to define Shape object
function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}
extend(Square, Shape); //Inherit Square from Shape object

// sample of overriding method
// Overriding the methods should be come after inhertance extension
Circle.prototype.move = function () {
  Shape.prototype.move.call(this); // call the duplicate metho from the parent
  console.log("Circle move");
};

const s = new Shape();
const c = new Circle(10, "red");
const c1 = new Circle.prototype.constructor(19, "blue"); // this returns Circle object because we have also reseted the constructor
const sq = new Square(5, "pink");

c.duplicate();
c.draw(); // we want to call draw method to shape object
c.move();

c1.duplicate();
c1.draw();

s.hello();

sq.draw();

//polymorphism
function Trinangle() {}
Trinangle.prototype.move = function () {
  console.log("Triangle move");
};

const shapes = [new Circle(4), new Trinangle()];
for (const shape of shapes) shape.move(); // instead of checking the type of each member and call the suitable move function, we can use polymorphism instead.

//Mixins: it's better to use composition against inheritance
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

function Person() {}
Object.assign(Person.prototype, canEat, canWalk);

const p1 = new Person();
p1.eat();
p1.walk();

function GoldFish() {}
// Object.assign(GoldFish.prototype, canEat, canSwim);
mixin(GoldFish.prototype, canEat, canSwim); //we can use the mixin function instead of above code

const g1 = new GoldFish();
g1.eat();
g1.swim();
