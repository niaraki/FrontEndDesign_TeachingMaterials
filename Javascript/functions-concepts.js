// hoisting: javescript engine moves function delcaration to the first of file. this called function hoisting
walk(); // we have function hoisting for function declaration and it works
// run(); // we don't have function hoisting for function expression

// Function Declaration
function walk() {
  console.log("walk");
}
walk();

// Anonymous Function Expression
let run = function () {
  console.log("run");
};
run();

let move = run;
move();

// Named Function Expression
let jump = function jumpFunc() {
  console.log("jump");
};
jump();

// Arguments
function add(a, b) {
  return a + b;
}

console.log(add(1)); // returns NaN
console.log(add(1, 2)); // returns 3
console.log(add("1", "2")); // returns 12

// Varing argument function
function show() {
  // arguments is an object that holds all passed arguments to the function
  for (const message of arguments) console.log(message);
}
show("mohammad", "is", "so", "cute");

// Varing arguments wiht rest operator
function log(...args) {
  for (const m of args) console.log(m);
}
log("error occured in the code", "please tell administrator");

// Note: the rest operator must be the last parameter in the list, due to this fact we call it rest :)
function calcPrice(discount, ...prices) {
  const totalPrice = prices.reduce((total, price) => total + price);
  return (1 - discount) * totalPrice;
}
console.log(calcPrice(0.1, 10, 20));

// Default parameters : Note: as best practice, place parameters with default value at the end of the list
function interest(principal, rate, years = 5) {
  rate = rate || 3.5; /* old style to set default value */
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000, 3.5));
console.log(interest(10000));

/* Getters and setters */
const person = {
  firstName: "Mohi",
  lastName: "Niraki",
  fullName() {
    /* function with es6 syntax */
    return `${person.firstName} ${person.lastName}`;
  },
  get fullNameGetter() {
    /* getter */
    return `${person.firstName} ${person.lastName}`;
  },
  set fullNameSetter(value) {
    /* settter */
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
// getters => to access properties
// setters => change(mutate) them
console.log(person.fullName());
console.log(person.fullNameGetter);
person.fullNameSetter = "mohammad niaraki";
console.log(person.fullNameGetter);

/* Error handling */
function devideByZero(a, b) {
  if (0 == b) throw new Error("b can not be zero");
  return a / b;
}

console.log(devideByZero(5, 2));
try {
  console.log(devideByZero(5, 0));
} catch (error) {
  console.log("exception occured:", error.message);
}

/* Scopes */
let message = "hi"; // global scope

function sayHello(name) {
  const message = "hello"; // local scope which hides the global scope variable
  {
    let name = "ali"; //block level scope
  }
  console.log(message + " " + name);
}
sayHello("mohammd");

/*diffrence of var and let */
// var => function-scoped, when we define a global variable with var keyword, that variable is attached to window object which is bad
// ES6(ES2015): let, const -> block-scoped
function start() {
  for (let i = 0; i < 5; ++i) console.log(i);
  for (var j = 0; j < 5; ++j) console.log(j);

  // console.log("let i:", i);
  console.log("var j:", j);
}
start();

var color = "blue"; // please avoid using var for defining variable :)
console.log("window.color: ", window.color);

/* this object */
// when we call a method, this refers to the object which contains the method
// when we call a regular function, this refers to window object in browser or global object in nodeJS
// when we call a regualr function with new keyword(ctor function), this referes to {} (newly created obejct)
const movie = {
  title: "a",
  show() {
    console.log(this);
  },
};
movie.show();
movie.stop = function () {
  console.log(this);
};
movie.stop();

function laugh() {
  console.log(this); // this refers to window/global object
}
laugh();

function Video(_title) {
  this.title = _title;
  this.show = function () {
    console.log(this);
  };
}
const v1 = new Video("nice video");
v1.show();
// Video("test video").show(); //undfined exception

/* change this object for function */
function HelloWorld(args) {
  const name = this.name || "window";
  console.log("HelloWorld: " + name + " - " + args);
}

HelloWorld("arg1"); //window object is referenced to this
HelloWorld.call({ name: "mohammad" }, "arg1"); //passed object will be referenced by this
HelloWorld.apply({ name: "ali" }, ["arg1"]); // arguments should be passed always as array
const BindedHelloWorld = HelloWorld.bind({ name: "reza" });
BindedHelloWorld("arg1");
