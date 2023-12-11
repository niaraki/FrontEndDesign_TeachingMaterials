const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const currentDate = new Date();
const monthIndex = currentDate.getMonth();

const monthName = document.querySelector(".date h1");
const monthFull = document.querySelector(".date p");
const daysElement = document.querySelector(".days");
const lastDay = new Date(currentDate.getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(currentDate.getFullYear(), monthIndex ,1).getDay() - 1;
const today = currentDate.getDate(); 

monthName.innerText = months[monthIndex];
monthFull.innerText = currentDate.toDateString();

let days = "";
for(let i=0; i<firstDay; i++) {
    days+=`<div class='empty'></div>`;
}
for(let i=1; i <= lastDay; i++)
{
    if (i == today)
        days += `<div class='today'>${i}</div>`;
    else
        days += `<div>${i}</div>`;

}
daysElement.innerHTML = days;


