//babeljs.io ==> you can use to compile new-age javascript syntax to old one
"use strict"; // activate strict mode, cause this object in function calls does not refer to window object

//class declaration: unlike functions, class declaration is not hoisted
const _x = Symbol(); // generates unique identifier for Symbol()
const _y = Symbol();
const _render = Symbol();
//we can also use WeakMap to define private method and property in a class
const _scaleFactor = new WeakMap();
const _scale = new WeakMap();

class Shape {
  constructor(color) {
    this.color = color;
  }
  Paint() {
    console.log("paint the shape with color:", this.color);
  }
  move() {
    console.log("shape move");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("red"); // in Child constructor we must call the parent constructor

    this.radius = radius;
    // these are private properties
    // first approach to define private member is to use Symbol()
    this[_x] = 0;
    this[_y] = 0;
    _scaleFactor.set(this, 3); //the first arg is the key and the second is value
    // second approach to define a private function it to use weakmap
    _scale.set(this, function () {
      console.log("Scale the circle");
    });
  }

  //this funcion will be overrided its parent move function
  move(newX, newY) {
    this[_x] = newX;
    this[_y] = newY;
    //call the private function _scale
    _scale.get(this)();
    console.log("scale factor:", _scaleFactor.get(this));
    super.move(); // you call the parent move funciton when you need it
  }

  //instance method
  draw() {
    console.log(
      `Draw a circle at (${this[_x]},${this[_y]}}) at ${this.radius}`
    );
    this[_render](); // call the private function
  }

  //static method: we can use them for utility functions
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }

  //private function: we use symbol for private functions
  //we use computed peroperty name in ES6 ([]) to define private function with unique name
  [_render]() {
    console.log("this is private render function");
  }

  //define gettters and setters
  //this is a function that returns the value of scale factor
  getScaleFactor() {
    return _scaleFactor.get(this);
  }
  // this is a getter property not a fucntion
  get ScaleFactor() {
    return _scaleFactor.get(this);
  }
  set ScaleFactor(value) {
    _scaleFactor.set(this, value);
  }
}

const c1 = new Circle(10);
console.log("Circle radius is not private:", c1.radius);
c1.move(14, 15);
c1.draw();
c1.ScaleFactor = 2.25; //set the setter property
console.log("scaleFActor peroperty : ", c1.ScaleFactor);
c1.Paint(); // call function from its parent
console.log(c1.color); // access to parent puplic propterty

const c2 = Circle.parse('{"radius":12}'); // call the static function
c2.draw();

// class expresion
const Square = class {};

// Excersie: Satck
const _stackArray = Symbol();
class Stack {
  constructor() {
    this[_stackArray] = [];
  }
  pop() {
    const value = this[_stackArray].pop();
    return value;
  }
  peek() {
    const items = this[_stackArray];
    const value = items[items.length - 1];
    return value;
  }
  push(value) {
    this[_stackArray].push(value);
  }
  get count() {
    return this[_stackArray].length;
  }
}
let s1 = new Stack();
s1.push("a");
s1.push("b");
s1.push("c");
console.log("Number of stack items: ", s1.count);

console.log(s1.peek());
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());
