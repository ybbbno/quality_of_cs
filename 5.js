// Задание 1
let n = parseInt(prompt("Введите границу интервала", ""));
let massiv = []
for(let i = 0; i < n; i++){
    massiv.push(parseInt(prompt("Введите число", "")));
}
let left = 0;
let right = massiv.length - 1;
while (left <= right){
    for(let i = right; i > left; i--){
        if (massiv[i - 1] > massiv[i]){
            let k = massiv[i-1];
            massiv[i-1] = massiv[i];
            massiv[i] = k;
        }
    }
    left++;
    for(let i = left; i < right; i++){
        if(massiv[i] > massiv[i + 1]){
            let k = massiv[i];
            massiv[i] = massiv[i+1];
            massiv[i+1] = k;
        }
    }
    right--;
}
massiv

// Задание 2
let str = prompt("Введите текст");
massiv = str.split(' ');
for(let i = 0; i < massiv.length; i++){
    if(massiv[i] === 'Вася') massiv[i] = 'Никита';
}
massiv.join(' ');

// Задание 3
str = prompt("Введите текст");
massiv = str.split(' ');
for(let i = 0; i < massiv.length; i+=3){
    massiv.splice(i, 0, 'что-то');
}
massiv.join(' ');

for(let i = 0; i < massiv.length; i++){
    if (massiv[i] === 'что-то') massiv.splice(i, 1);
}
massiv.join(' ');

// Задание 4
let x1 = [1, 2]
let x2 = [3, 4]
let dlina = Math.sqrt(Math.pow(x2[0]-x1[0], 2)+Math.pow(x2[1]-x1[1], 2))
dlina

// Задание 5
let phrases = [
    "Звучит неплохо",
    "Да, это определенно надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьютер говорит нет"
]

prompt("Введите текст");
phrases[Math.floor(Math.random()*(phrases.length-1))]

// Задание 6
let dict = [
    ['hello', 'привет'],
    ['bye', 'пока'],
    ['apple', 'яблоко'],
    ['banana', 'банан'],
    ['road', 'дорога'],
    ['dictionary', 'словарь'],
    ['pen', 'ручка'],
    ['mouse', 'мышь'],
    ['lier', 'лжец'],
    ['cat', 'кот']
]

let str = prompt("Введите текст");
let a = true;
for(let i = 0; i < dict.length; i++){
    if(dict[i][0] === str.toLowerCase()) {
        a = false;
        console.log(dict[i][1])
        break;
    }
    if(dict[i][1] === str.toLowerCase()){
        a = false;
        console.log(dict[i][0]);
        break;
    }
}
if (a) console.log('?');