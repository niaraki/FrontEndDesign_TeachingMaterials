//this format of importing module only works
// for ES6 modules inside of the browser.
// Note: we should put extension after the name
import { Stack } from "./Stack.js";

const s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30);
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());
