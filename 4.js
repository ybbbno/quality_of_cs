// Задание 1
WayVKI = ['ст. Черепаново', 'Электричка Чер-НСК', 'Станция Бердск', 'Остановка пл. Горького', 'Маршрутка 27', 'остановка НииСистем', '500 метров на запад', 'ВКИ'];
for(let i = WayVKI.length-1; i >= 0; i--){
    if (WayVKI[i].search('запад') == -1){
        console.log(WayVKI[i]);
    } else {
        console.log(WayVKI[i].replace('запад', 'восток'));
    }
}
// alert выводит на экран предупреждение с сообщением, console.log отправлять сообщение в консоль

// Задание 2
WayVKI.pop();
WayVKI.pop();
WayVKI.push("2 км на восток");
WayVKI.push("Гигант");
WayVKI

// Задание 3
WayVKI = ['ст. Черепаново', 'Электричка Чер-НСК', 'Станция Бердск', 'Остановка пл. Горького', 'Маршрутка 27', 'остановка НииСистем', '500 метров на запад', 'ВКИ'];
BackWay = [];
for(let i = 0; i < WayVKI.length; i++){
    if (WayVKI[i].search('запад') == -1){
        BackWay.unshift(WayVKI[i]);
    } else {
        BackWay.unshift(WayVKI[i].replace('запад', 'восток'));
    }
}
BackWay.splice(BackWay.indexOf('500 метров на восток'), 0, 'Перейти дорогу');
BackWay

// Задание 4
let n = parseInt(prompt("Введите границу интервала", ""));
let massiv = [];
let a = true;
for(let i = 2; i <= n; i++){
    for(let j = 2; j < i; j++){
        if (i % j === 0){
            a = false;
            break;
        }
    }
    if (a) massiv.push(i);
    a = true;
}
massiv