let numbers = [2, 4];

/*=== adding elemenets */
/*place at the begnning of array */
numbers.unshift(0, 1);
/* place at index in the the middle off array - second paramter specifies number of characters that we want to delete */
numbers.splice(3, 0, 3);
/*place at the end of array */
numbers.push(5, 6);
console.log(numbers);

/* finding elements */
let indexOfElement = numbers.indexOf(8);
console.log(indexOfElement);
indexOfElement = numbers.indexOf(3);
console.log(indexOfElement);
// returns true when elements is exist in array
console.log(numbers.includes(1));

// finding the reference element
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "c" },
  { id: 3, name: "b" },
];
console.log(courses.includes({ id: 1, name: "a" })); // use .includes only for primitive types
console.log(
  courses.find(function (course) {
    return course.id < 3;
  })
); //find the first element that matches the defined criteria
// using arrow-function to find index of reference-element that matched the defined criteria
console.log(courses.findIndex((course) => course.id === 2));

/* Remove element from the array */
// remove and return the last element
console.log(numbers.pop());
// remove in the middle with start-index and size
console.log(numbers.splice(2, 2));
// remove and return the first element
console.log(numbers.shift());

/* Empty an array */
let anotherNumbers = numbers;
//solution 1
numbers = []; // doesn't work when we have multiple references
console.log(numbers);
console.log(anotherNumbers);
//solution 2
numbers.length = 0;
//solution 3
numbers.splice(0, numbers.length);
//soulution 4
while (numbers.length > 0) numbers.pop();

/* Combine and slice two arrays */
let names = ["mohammad", "noora", "ali"];
let nationalCodes = ["00127", "004884"];
// note: for reference types, only the reference is copied by concat and slice functions
const combined = names.concat(nationalCodes);
const sliced = combined.slice(2);
const copiedNationalCodes =
  nationalCodes.slice(); /* slice without any arguments returns copy version of the array */
console.log(combined);
console.log(sliced);

/* spread operator */
const combined2 = [...names, "a", ...nationalCodes, "b"];
const copiedNames = [...names];
console.log(combined2);

/* Iterate over arrays */
const colors = ["Blue", "Red", "Yellow"];
for (let i = 0; i < colors.length; ++i) console.log(colors[i]);
for (let color of colors) console.log(color);
colors.forEach((color) => {
  console.log(color);
});

/* joining arrays */
const colorsString = colors.join(","); // convert array to string by separator
console.log(colorsString);
const message = "welcome to your home mohammad";
const parts = message.split(" "); // create array from string by separator
console.log(parts);

/* sorting arrays */
const levels = [3, 1, 5, 4];
levels.sort();
console.log(levels);
levels.reverse();
console.log(levels);
courses.sort(function (a, b) {
  const name_A = a.name.toUpperCase();
  const name_B = b.name.toUpperCase();
  if (name_A < name_B) return -1;
  if (name_A > name_B) return 1;
  return 0;
});
console.log(courses);

/* testing elemetns */
const scores = [14, 20, 17];
const isAllStudentsPassedTheExam = scores.every(function (score) {
  return score >= 14;
});
console.log(isAllStudentsPassedTheExam);
const isAtleastOneTwenty = scores.some(function (score) {
  return score == 20;
});
console.log(isAtleastOneTwenty);

/* Filter based on criteria */
const filteredScores = scores.filter((s) => s != 20);
console.log(filteredScores);

/* Map */
const scoresItems = filteredScores.map((s) => "<li>" + s + "</li>");
const scoresObjItems = filteredScores.map((s) => {
  return { value: s };
});
console.log(scoresObjItems);

const scoresHtml = "<ul>" + scoresItems.join(" ") + "</ul>";
document.write(scoresHtml);

/* we can chain */
const passedScores = scores
  .filter((s) => s > 10)
  .map((s) => "<li>" + s + "</li>")
  .join(" ");
document.write(`<ol>${passedScores}</ol>`);

/* Reduce */
let scoreSum = scores.reduce(
  (accumulator, currentScore) => accumulator + currentScore,
  0 /* intial value for accumulator */
);
console.log(scoreSum);

/*example 1*/
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// --? show the title of each movie produced in 2018 by rating greater than 4 and sort them in descending order based on rating
const titles = movies
  .filter((m) => m.year == 2018 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating) /* a > b : +, a < b: -, a == b: 0 */
  .reverse() /* reverse array to make it as a descending order */
  .map((m) => m.title); /* pick title of each movie */
console.log(titles);

/* example 2 */
const nums = [1, 2, 3, 4, -1, 1];
// --? show sum of nums
const numsSum = nums.reduce((acc, n) => acc + n);
console.log(numsSum);
// note: we can use reduce algorithm when we need to iterate over an array and calculate a value for each member of it
