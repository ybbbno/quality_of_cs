// Задание 1.1
let str = prompt("Введите сообщение");
let encoded_str = [];
let decoded_str = [];

for(let i = 0; i < str.length; i++){
    if (str[i].charCodeAt(0) >= 1072 && str[i].charCodeAt(0) <= 1103) encoded_str.push(str[i].charCodeAt(0)-1071);
    else if(str[i].charCodeAt(0) === 1105) encoded_str.push(7);
    else if (str[i].charCodeAt(0) >= 1040 && str[i].charCodeAt(0) <= 1071) encoded_str.push(str[i].charCodeAt(0)-1007);
    else if(str[i].charCodeAt(0) === 1025) encoded_str.push(33+7);
    else encoded_str.push(str[i]);
}

console.log(encoded_str.join(""));

for(let i = 0; i < encoded_str.length; i++){
    if (encoded_str[i] === 7) decoded_str.push('ё');
    else if(encoded_str[i] === 33+7) decoded_str.push('Ё');
    else if(encoded_str[i] > 0 && encoded_str[i] <= 33) decoded_str.push(String.fromCharCode(encoded_str[i]+1071));
    else if(encoded_str[i] > 33 && encoded_str[i] <= 64) decoded_str.push(String.fromCharCode(encoded_str[i]+1007));
    else decoded_str.push(encoded_str[i]);
}

console.log(decoded_str.reverse().join(""));

// Задание 1.2
let sys = parseInt(prompt("Введите систему счисления"));
let num = parseInt(prompt("Введите число"));
let sys_num = [];

while (num >= 1){
    sys_num.push(Math.floor(num % sys));
    num /= sys;
}

console.log(sys_num.reverse().join(""));