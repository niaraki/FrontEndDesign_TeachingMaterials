const dayE1 = document.getElementById("day");
const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minute");
const secondE1 = document.getElementById("second");

const second = 1000; /* 1000ms = 1s */
const minute = second * 60;
const hour = minute* 60;
const day = hour * 24;
const newYearDate = new Date("Jan 1, 2024 00:00:00").getTime();

function updateCountdown() 
{
    const now = new Date().getTime();
    const gap = newYearDate - now;
    
    dayE1.innerText = Math.floor(gap/day);
    hourE1.innerText = Math.floor((gap% day)/hour);
    minuteE1.innerText = Math.floor((gap% hour)/minute);
    secondE1.innerText= Math.floor((gap% minute)/second);
}



setInterval(updateCountdown,1000);