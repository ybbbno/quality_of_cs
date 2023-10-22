// Упражнение 1
let massiv = [1, 2, 3];
massiv[massiv.length-1]

// Упражнение 2
let animals = ["Кот", "Пес", "Ежик"];
let x = animals[0];
animals[0] = animals[2];
animals[2] = x;
animals

// Упражнение 3
let animals = ["Слон", "Лев", "Леопард", "Буйвол", "Носорог"];
animals.unshift("Никита");
let x = animals.pop();
animals.push(animals.shift());

// Упражнение 4
let predators = ['Волк', 'Лиса'];
let herbivores = ['Заяц', 'Ёж'];
let massiv = predators.concat(herbivores);
let x = massiv.shift();
massiv.unshift(massiv.pop());
massiv.push(x);
// Нет

// Упражнение 5
let massiv = ['Докторов', 'Никита', 'Дмитриевич'];
massiv.unshift('Господин');
massiv.pop();
massiv.pop();
massiv.join("@");