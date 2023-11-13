// Задание 1
let double_check = function(num){
    if (num % 2 === 0) return true;
    else return false;
}

let double_func = function(str, num){
    if(double_check(num) && str.toLowerCase() === "четное") return num*2;
    else if (!double_check(num) && str.toLowerCase() === "нечетное") return num*2;
    else return num;
}

let str = prompt("Четное или нечетное?");
let nums = [];
for(let i = 0; i < 15; i++) nums.push(parseInt(prompt("Введите число")));

let nums_double = [];
let num, j = 0;
for(let i = 0; i < nums.length; i++) {
    if (j === 10) break;
    num = double_func(str, nums[i])
    if(num != nums[i]) {
        j++;
        nums_double.push(num);
    }
}

console.log(nums.join(" "));
console.log(nums_double.join(" "));

// Задание 2
let str = prompt("Четное или нечетное?");
let nums = [];
for(let i = 0; i < 15; i++) nums.push(parseInt(prompt("Введите число")));

let nums_sum = 0;
let j = 0;
for(let i = 0; i < nums.length; i++) {
    if (j === 10) break;
    nums_sum += double_func(str, nums[i]);
}

console.log(nums.join(" "));
console.log(nums_sum);

// Задание 5
function fibonachi(num){
    if(num === 0) return 0;
    if(num === 1) return 1;
    return fibonachi(num-2) + fibonachi(num - 1);
}

let num = parseInt(prompt("Введите число"));
console.log(fibonachi(num));