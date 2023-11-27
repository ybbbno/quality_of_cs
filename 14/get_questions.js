cosmo = [
    ["Кто был первым человеком, совершившим полет в космос?", ["Юрий Гагарин", "Джон Гленн", "Нил Армстронг", "Алексей Леонов"], "Юрий Гагарин"],
    ["В каком году состоялся первый полет человека в космос?", ["1957", "1961", "1969", "1971"], "1961"],
    ["Какая страна запустила первый искусственный спутник Земли?", ["США", "СССР", "Китай", "Япония"], "СССР"],
    ["Какой космический аппарат был первым, коснувшимся поверхности Луны?", ["Apollo 11", "Луна-2", "Спутник-1", "Восток-1"], "Луна-2"],
    ["Сколько стран участвуют в создании и обслуживании Международной космической станции (МКС)?", ["3", "5", "10", "15"], "15"],
    ["Какая из перечисленных планет не была целью космических миссий?", ["Марс", "Юпитер", "Венера", "Сатурн"], "Сатурн"],
    ["Какая единица измерения используется в космосе для измерения расстояний?", ["световой год", "километр", "метр", "миля"], "световой год"],
    ["Как называется первый космический корабль, отправленный на Марс?", ["Phoenix", "Voyager", "Curiosity", "Mariner"], "Mariner"],
    ["Какая из перечисленных планет является ближайшей к Солнцу?", ["Марс", "Земля", "Венера", "Меркурий"], "Меркурий"],
    ["Какая технологическая разработка не была создана в рамках космических программ?", ["Космический аппарат для повторного использования", "GPS навигация", "Исследование искусственного интеллекта для автоматического старта и посадки", "Материалы с памятью формы"], "GPS навигация"]
];

function create_form(array){
    let form = document.createElement("form");
    form.action = "/form";
    form.method = "post";

    for(let i = 0; i < array.lenght; i++){
        let div = document.createElement("div");
        
        let label = document.createElement("label");
        label.innerText = array[i][0];
        div.appendChild(label);
        div.appendChild(document.createElement("br"));

        for(let j = 0; j < array[i][1].lenght; i++){
            let input = document.createElement("input");
            input.type = radio;
            input.id = "ch"+j;
            input.name = i;
            input.value = j;

            let label = document.createElement("label");
            label.setAttribute("for", "ch"+j);

            div.appendChild(input);
            div.appendChild(label);
            div.appendChild(document.createElement("br"));
        } 

        form.appendChild(div);
    }

    document.body.appendChild(form);
}

create_form(cosmo);