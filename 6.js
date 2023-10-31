// Задание 1
let num = parseInt(prompt("Введите число", ""));
let num1;
for(let i = 0; i < 2; i++){
    num1 = parseInt(prompt("Введите число", ""));
    if(num < num1) num = num1;
}

console.log(num);

// Задание 2
console.log([3, 2, 1].join(" больше, чем "))

// Задание 1
let Planets = [
    {name:"Меркурий", dist: 0.39},
    {name:"Венера", dist: 0.72},
    {name:"Земля", dist: 1},
    {name:"Марс", dist: 1.52},
    {name:"Юпитер", dist: 5.20},
    {name:"Сатурн", dist: 9.58},
    {name:"Уран", dist: 19.18},
    {name:"Нептун", dist: 30.07},
]

for(let i = 0; i < Planets.length; i++){
    if (Planets[i].dist <= 1) console.log(Planets[i].name);
}

// Задание 2
let Players = [
    {surname:"Кряков", height:192, weight: 78},
    {surname:"Малениум", height:191, weight: 79},
    {surname:"Фрекин", height:190, weight: 80},
    {surname:"Браун", height:189, weight: 81}
]

for(let i = 0; i < Players.length; i++){
    if (Players[i].height > 190 && Players[i].weight < 80) console.log(Players[i].surname);
}

// Задание 3
let K = [
    {name:"Яблоко", weight:150, calories:80},
    {name:"Куриное филе", weight: 100, calories:165},
    {name:"Макароны", weight: 85, calories:300},
    {name:"Огурец", weight: 150, calories:15},
    {name:"Гречка", weight: 100, calories:340},
    {name:"Тунец", weight: 160, calories:170},
    {name:"Молоко", weight: 200, calories:120}
]

let K_min = [K[0], K[1]]
let min = K[0].calories + K[1].calories;

for(let i = 0; i < K.length; i++){
    for(let j = i+1; j < K.length; j++){
        if(K[i].calories + K[j].calories < min){
            K_min[0] = K[i];
            K_min[1] = K[j];
            min = K[i].calories + K[j].calories;
        }
    }
}

console.log(K_min[0].name, K_min[1].name, min);

// Задание 4
let K_min = [K[0], K[1], K[2]]
let min = K[0].calories + K[1].calories + K[2].calories;

for(let i = 0; i < K.length; i++){
    for(let j = i+1; j < K.length; j++){
        for (let k = j+1; k < K.length; k++){
            if(K[i].calories + K[j].calories + K[k].calories < min){
                K_min[0] = K[i];
                K_min[1] = K[j];
                K_min[2] = K[k];
                min = K[i].calories + K[j].calories + K[k].calories;
            }
        }
    }
}

console.log(K_min[0], K_min[1], K_min[2], min);
