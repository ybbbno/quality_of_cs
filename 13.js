//Задание 1
let mas1 = [];
let mas2 = [];
let mas3 = [];

for(let i = 0; i < 4; i++){
    mas1[i]=[];
    mas2[i]=[];
    mas3[i]=[];
    for(let j = 0; j < 4; j++){
        mas1[i].push(Math.floor(Math.random() * 5));
        mas2[i].push(Math.floor(Math.random() * 5));
        mas3[i].push(mas1[i][j] + mas2[i][j]);
    }
}

console.log(mas1, mas2, mas3);

//Задание 2
function create_array(max_x, max_y){
    let array = [];
    for(let i = 0; i < max_x; i++){
        array[i] = [];
        for(let j = 0; j < max_y; j++) array[i].push(Math.floor(Math.random() * 10));
    }
    return array;
}

console.log(create_array(prompt('x'), prompt('y')));

//Задание 3
function diog_sum(array, max_x){
    let glav_diog = 0;
    let poboch_diog = 0;
    for(let i = 0; i < max_x; i++){
        for(let j = 0; j < max_x; j++){
            if(i === j) glav_diog += array[i][j];
            if(i + j + 1 === max_x) poboch_diog += array[i][j];
        }
    }
    return glav_diog === poboch_diog;
}

function array_kv(max_x){
    let array = []
    for(let i = 0; i < x; i++){
        array[i] = [];
        for(let j = 0; j < x; j++) array[i].push(Math.floor(Math.random() * 10));
    }
    return array;
}

let x = parseInt(prompt('x'));
let _array = array_kv(x);

while(!diog_sum(_array, x)) _array = array_kv(x);

//Задание 4
let x = parseInt(prompt('x')), y = parseInt(prompt('y')), r = parseInt(prompt('r'));

if(Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2)) alert("Находиться в окружности");
else alert("Не находится в окружности");