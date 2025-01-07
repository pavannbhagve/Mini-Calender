const year = document.querySelector(".year");
const month = document.querySelector(".month");
const weekdays = document.querySelector(".weekdays");
const day = document.querySelector(".day"); 

window.addEventListener("DOMContentLoaded",()=>{
const date = new Date();
console.log(date,"date");
console.log("month",date.getMonth());
console.log("day",date.getDate());
console.log("year",date.getFullYear());
console.log("day of the week",date.getDay());

day.textContent = date.getDate();
year.textContent = date.getFullYear();
month.textContent = date.toLocaleDateString("en-US",{month :"long"});
weekdays.textContent = date.toLocaleDateString("en-US",{weekday :"long"});




})