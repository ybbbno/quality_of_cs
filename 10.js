// Задание 1
function get_char(str, num){
    if (str.toLowerCase() === 'кириллица'){
        if (num === 7) return 'ё';
        else if(num === 33+7) return 'Ё';
        else if(num > 0 && num <= 32) return String.fromCharCode(num+1071);
        else if(num > 32 && num <= 64) return String.fromCharCode(num+1007);
    } else if(str.toLowerCase() === 'латиница'){
        if(num > 0 && num <= 26) return String.fromCharCode(num+96);
        else if(num > 26 && num <= 52) return String.fromCharCode(num+38);
    }
}

alert(get_char(prompt("Введите тип"), parseInt(prompt("Введите аргумент"))));

// Задание 2
function even_or_not(num){
    if(num % 2 === 0) return true;
    else return false;
}

function get_even_char(char){
    let code = char.charCodeAt();
    console.log(code);
    if(char === 'ё') return false;
    else if(char === 'Ё') return false;
    else if(code >= 1072 && code <= 1103) return even_or_not(code);
    else if(code >= 1040 && code <= 1071) return even_or_not(code);

    if(code >= 97 && code <= 122) return even_or_not(code);
    else if(code >= 65 && code <= 90) return even_or_not(code);
}

let str = prompt("Введите предложение"), sum = 0;
for(let i = 0; i < str.length; i++){
    if(get_even_char(str[i])) sum++;
}

alert(sum);

// Задание 3
function get_area(a, b){
    return 0.5 * a * b;
}

alert(get_area(parseInt(prompt("Введите a")), parseInt(prompt("Введите b"))));

// Задание 4
function pow(n, s){
    return s ? n * pow(n, s-1) : 1;
}

alert(pow(parseInt(prompt("Введите N")), parseInt(prompt("Введите S"))));

// Задание 1
function get_medal(num){
    if(num < 10) return "Нет медали";
    else if(num >= 10 && num <= 15) return "Бронзовая медаль";
    else if(num >= 16 && num <= 20) return "Серебряная медаль";
    else return "Золотая медаль";
}

alert(get_medal(parseInt(prompt("Введите значение"))));

// Задание 2
function areArraysSame(mas1, mas2){
    if(mas1.length != mas2.length) return false;
    for(let i = 0; i < mas1.length; i++){
        if(mas1[i] != mas2[i]) return false;
    }
    return true;
}

let lenght1 = parseInt(prompt("Введите размер 1-ого массива"));
let mas1 = [];
for(let i = 0; i < lenght1; i++){
    mas1.push(parseInt(prompt("Введите значение")));
}

let lenght2 = parseInt(prompt("Введите размер 2-ого массива"))
let mas2 = [];
for(let i = 0; i < lenght2; i++){
    mas2.push(parseInt(prompt("Введите значение")));
}

if(areArraysSame(mas1, mas2)) alert("Массивы одинаковы");
else alert("Массивы различаются");