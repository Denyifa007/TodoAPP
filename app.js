import {MONTHs, DAYS} from './db.js'
console.log(MONTHs);
console.log(DAYS);

// functions to check on todo

let date = document.querySelector('#todaysDate')
const todaysDate = new Date()
const month = todaysDate.getMonth()
const day = todaysDate.getDay()

let currentDate = `${MONTHs[month]} ${todaysDate.getDate()} ${todaysDate.getFullYear()}`
console.log(currentDate); 
date.innerText = currentDate