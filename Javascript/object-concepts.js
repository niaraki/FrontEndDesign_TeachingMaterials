/* objects: collection of key-values */
/* classic way of definning object */
let circle = {
  radius: 1,
  /* nested object */
  location: {
    x: 10,
    y: 20,
  },
  isVisible: true,
  /*method */
  draw: function () {
    console.log("cricle : ", this.location.x, this.location.y);
  },
};
circle.draw();

//Factory function: the name should be camelNotation
function createCircle(radius) {
  return {
    radius, // when we have key:value and key=value, we can write one time
    draw: function () {
      console.log("draw circle radius:", radius);
    },
    /* second way of defining method */
    hello() {
      console.log("hello circle");
    },
  };
}
let circle2 = createCircle(2);
circle2.draw();
circle2.hello();

//constructor function: the name should be PascalNotation
function Circle(radius) {
  //add radius propterty to the empty object "this"
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(
  1
); /* when we use new keyword, it creates empty object and assing it to "this" */
circle3.draw();
/* prototype of circle3 would be CircleBase and the prototype of CircleBase would be Object
because we used constructor function to make instance of Circle */
/* objects are dynamic, so during the run-time we are able to add/remove propertis */
circle3.color = "blue";
delete circle3.color;

/* every object has constructor property which is a function that is used to construct the object. by default is Object() function */
let x = {};
console.log(typeof x.constructor);

/* in javascript, functions are also Object */
const CircleFunc = new Function(
  "radius",
  `
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
`
);
const circle4 = new CircleFunc(1);
circle4.draw();

/* Value types(primitves): Number, String, Boolean, Symbol, undefined, null */
let n1 = 10;
let n2 = n1; // copy by value
n1 = 20;
n1.value = 20; /*equal to n1=20; */
console.log("n1: ", n1, " n2: ", n2);

/* Reference Types: Object, Function, Array */
let obj = { value: 10 };
let number = 10;

function increase(obj, number) {
  obj.value++;
  number++;
}
increase(
  obj,
  number
); /*object is passed by reference and number is passed by value */
console.log("object value : ", obj.value, " number: ", number);

/* Iterate over peropterties of an object */
for (let key in circle) console.log(key, circle[key]);

for (let key of Object.keys(circle)) console.log(key);

for (let entry of Object.entries(circle)) console.log(entry[0], entry[1]);

if ("radius" in circle) console.log("radius is a peroperty in circle object");

/* Clone an object */
const clonedCircle1 = {};
const clonedCircle2 = {};
// old-style of cloning object
for (let key in circle) clonedCircle1[key] = circle[key];
// new-style
Object.assign(clonedCircle2, circle);
// modern-style
const clonedCircle3 = { ...circle };

console.log(clonedCircle1);
console.log(clonedCircle2);
console.log(clonedCircle3);

/* Garbage Collection: memory is automatic in javascript */

/* Built-in Objects like Math, String and Date and ... */
console.log("random:", Math.floor(Math.random() * 10));

// string primitive
const message = "hi";
console.log(message.length);
// string object
const anotherMessage = new String("hi mohammad");
/* google about javascript to learn more about string functions in javascript */
/* template literal */
const result = `x+y=${1 + 2}
we can add new line in template literals
`;
console.log(result);

const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 0, 1);

now.setFullYear(2017);
console.log(now.toDateString());

/* prototype of each object  */
let xObj = {};
let yObj = {};
if (Object.getPrototypeOf(xObj) === Object.getPrototypeOf(yObj)) {
  console.log("each object has a shared prototype object");
}

/* == Peroperties */
const student = {
  id: 0,
  name: "Mohammad",
  famili: "niaraki",
};
delete student.name; // remove name from student
console.log(student);

/* get peroptery descriptor */
const familiDescriptor = Object.getOwnPropertyDescriptor(student, "famili");
console.log(familiDescriptor);

/*writable: we can write new values when it is true
  enumerable: we can enumrate on it when it is true
  configurable: we can delete it when it is true */
Object.defineProperty(student, "telphone", {
  writable: true,
  enumerable: false, // we can't get it in keys of the object
  configurable: true, // we can't delete it
});
// delete student.telphone; //we can't delete it because configutable is false
console.log(student);
console.log(Object.keys(student));
student.telphone = "0912";
console.log(`student tel is ${student.telphone}`);

/* prototype peroperty of constructor  */
const circleObj = new Circle(10);
if (Object.getPrototypeOf(circleObj) === Circle.prototype)
  console.log("prototype is the base of each object created by constructor");

/* we can put our functions to prototype to prevent memory waste */
Circle.prototype.Move = function () {
  console.log(`Circle ${this.radius} move `);
};
circleObj.Move();

/* Iterating over peroperties */
console.log(Object.keys(circleObj)); //doesn't list properties in prototype
for (let key in circleObj) console.log(key); //lists 

