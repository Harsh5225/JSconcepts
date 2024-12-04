const date = new Date();
console.log(date.toDateString());
console.log(date.toString());
console.log(date.toISOString());

console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getMilliseconds());

// millisecond , online booking two persons are booking the ticket on the same day, only one should get the ticket
// ticket should be given to whom? i will give the ticket to the person who has booked first.(miliseconds)

// const now=Date.now();
// console.log(now);

const date1 = new Date("2024-12-03");
console.log(date1.toDateString());

// number based 0 based indexing
const date2 = new Date(2024, 5, 28, 10, 22, 100);
console.log(date2);

// setter methods
const d = new Date();
d.setDate(20);
console.log(d.toString());
d.setFullYear(2025);
console.log(d.toLocaleString());

// date calculation
const date3 = new Date("2024-12-03");
const date4 = new Date();
console.log(date4 - date3);
console.log(date4 > date3);
// difference between date is miliseconds

// Countdown timer
// days hour minute seconds
const date5 = new Date();
const date6 = new Date("2028-07-14T00:00:00");

const diff = date6 - date5;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minute = Math.floor((diff / (1000 * 60)) % 60);
const second = Math.floor((diff / 1000) % 60);
console.log(days);
console.log(hour);
console.log(minute);
console.log(second);

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

const mi = new Date("2024-12-24");
let month = months[mi.getMonth()];
console.log(month);
