//this format of importing module only works
// for ES6 modules inside of the browser.
// Note: we should put extension after the name
// import { Stack } from "./Stack.js";

//for nodeJs we should use commonJs format to
// import a module
const Stack = require("./Stack_nodejs_module");

const s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30);
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());
