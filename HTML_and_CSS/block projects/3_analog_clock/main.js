

setInterval(()=>
{
let hour1 = document.querySelector(".hour");
let mintue1 = document.querySelector(".minute");
const second1 = document.querySelector(".seconds");

let d = new Date();
let tHour = d.getHours();
tHour = (tHour > 12)? tHour - 12: tHour;
let tMinute = d.getMinutes();
let tSeconds = d.getSeconds();

console.warn("hellow");
const angleBase60 = 360/60;
const angleBase12 = 360/12;
second1.style.transform='rotate('+ angleBase60 * tSeconds +'deg)';
mintue1.style.transform='rotate('+ angleBase60 * tMinute+'deg)';
hour1.style.transform='rotate('+ angleBase12 * tHour+'deg)';

}, 1000);