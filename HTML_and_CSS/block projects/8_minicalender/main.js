const monthNameE1 = document.querySelector(".header");
const dayNameE1 = document.querySelector(".dayName");
const dayNumberE1 = document.querySelector(".dayNumber");
const yearNumberE1 = document.querySelector(".yearNumber");

const date = new Date().toDateString();
yearNumberE1.innerText = date.split(' ')[3];
dayNameE1.innerText = date.split(' ')[0];
dayNumberE1.innerText = date.split(' ')[2];
monthNameE1.innerText = date.split(' ')[1];