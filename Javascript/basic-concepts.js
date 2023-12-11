/* log functions */
console.log("Sample log in javascript");
console.warn("Sample warn in javascript");
console.error("Sample error in javascript");

/* function defenitions */
function sayHelloFunction(name){
    console.log("Hello dear ", name)
}

function sampleNestedFunc(name, family) {
    console.log("Hey dear,", name);
    greet(family);
    function greet(gf) {
        console.log(" your welcome ", gf);
    }
}

/* variable defenitions */
const nOfports = 12;
let name="mohammad";
let count=12;
let pi = 3.14;
let flag = true;
let mystry = undefined;

// define object
let student = {
    name: 'Mohamamd',
    id: 12,
    family: 'Niaraki' }; 

// define array
let sampleArray = ['mohammad', 'ali', 3]; 
let funcVar = sayHelloFunction; 
let sampleLambdaFunc = (name) => {console.log("Greeting dear, ",name);}; 

/*Print data-types */
console.log("typeof name ia :" + typeof name); 
console.log("typeof count ia :" + typeof count); 
console.log("typeof pi ia :" + typeof pi ); 
console.log("typeof flag ia :" + typeof flag); 
console.log("typeof mystry ia :" + typeof mystry); 
console.log("typeof student ia :" + typeof student); 
console.log("typeof sampleArray ia :" + typeof sampleArray); 
console.log("typeof funcvar ia :" + typeof funcVar); 

/*Access to ojbect fields */ 
console.log("The name of student is: ", student.name);
console.log("The family of student is: ", student['family']);

/*access to array */
console.log("the length of array is :", sampleArray.length);
console.log("the second element of the array is : ", sampleArray[1]);

/*call a function */
sayHelloFunction("noora");
funcVar("mohammad");
sampleLambdaFunc("reza");
sampleNestedFunc("mohammad", "niaraki");

/*operators - Arithmatic */
console.log(1 + 2);
console.log(11 % 2);
console.log(11 ** 2); /*  11 power of 2*/

/*operators - Comparison */
let x = 1;
console.log(x > 1);
console.log(x >= 1);
console.log(x == 1); /* loose equality operator */
console.log("strict euqlity operator: ",x == '1'); /* type is not checked */
console.log(x === 1);/* strict equality operator */
console.log("Strict equality operator: ",x === '1'); /* both operand should be the same type */
console.log(x != 1);
console.log(x !== 1);

/*operators - Logical */
console.log("logical and: ", true && false);
console.log("logical or: ", true || false);
console.log("logical not: ", !true);
//falsy: Nan, false, 0, '', "", undefined
//truthy: true, 1, anything inseated of falsy are truthy
let userColor = undefined;
let defaultColor = 'Red';
let currentColor = userColor || defaultColor; /* when we have falsy opernad,the truthy operand is returned */
console.log(currentColor);

/*operators - Bitwise */
console.log(1 | 2); /* logcial or */
console.log(1 & 2); /* logcial and */
console.log(3 ^ 2); /* logcial xor */

/* control flow */
let age = 17;
if (age >= 18)
    console.log("legal age");
else if (age > 10 && age < 18)
    console.log("Under legal age");
else 
    console.log("kid");
// simple switch-case
switch(age){
    case 17:
        console.log('under age');
        break;
    default:
        console.log('unknown age');
        break;
}

for(let i=0; i < 3; i++) {
    console.log("loop:", i);
}

// other loops
let index=0;
while (index < 3)
{
    console.log("while counter: ", index++);
}

do{
    console.log("do-while counter: ", index++);
}
while(index <= 6)

/*iterate over the array */
let nameArray = ['mohammad', 'ali', 'reza'];
for(let name of nameArray) 
    console.log("student name is : ", name);

/* iterate over the object */
let movieObj={
    name: 'Fast and Fury',
    id : 1
};
for(let key in movieObj)
    console.log(key, " : " , movieObj[key]);


