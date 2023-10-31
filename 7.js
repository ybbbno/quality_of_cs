// Задание 4
let date1 = new Date(prompt("Введите дату", ""));
let date2 = new Date();

let time_diff = Math.abs(date2.getTime() - date1.getTime());
console.log(Math.floor(time_diff / (1000 * 3600 * 24)));