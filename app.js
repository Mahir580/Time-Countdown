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
    "December"
]
const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday"
]

const giveaway = document.querySelector(".giveaway");
const countdown = document.querySelector(".countdown");
const items = document.querySelectorAll(".time-counter h1");

let tempDate = new Date();
let tempyear = tempDate.getFullYear();
let tempmonth = tempDate.getMonth();
let tempdate = tempDate.getDate();
// let futureDate = new Date(2021, 9, 30, 20, 30, 00)
const futureDate = new Date(tempyear, tempmonth, tempdate + 10, 20, 30, 0)

const week = futureDate.getDay();
// week = weeks[week];
const date = futureDate.getDate();
const month = futureDate.getMonth();
// month = months[month];
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const second = futureDate.getSeconds();

giveaway.textContent = `Giveaway ends on ${weeks[week]}, ${date} ${months[month]} ${year}, ${hour}:${minute}:${second}0am`;

if (hour > 12) {
    giveaway.textContent = `Giveaway ends on ${weeks[week]}, ${date} ${months[month]} ${year}, ${hour - 12}:${minute}:${second}0pm`;
}

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureDate - today;

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //get time remaning time into day hour minute and second
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    //set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item;
    }
    format();

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    })
    if (t < 0) {
        clearInterval(countdown);
        countdown.innerHTML = "<h1>Sorry the giveaway is expired</h1>"
    }
}

//countdown

let Countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();