'use strict'

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto'); //делаем запрос
request.send(); // запрашиваем ответ

request.addEventListener('load', function() { // сделали отображения
    const date = JSON.parse(this.responseText) //парсим информацию в date
    console.log(date)

    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/ability/7/')
    request.send(); // запрашиваем ответ

    request.addEventListener('load', function() { // сделали отображения
        const {effect_entries} = JSON.parse(this.responseText) //парсим информацию в effect_entries
        console.log(effect_entries)

        let result = effect_entries.map(item => item.effect) //из списка массивов, через метод map сохраняем в новую переменную информацию по всем элеменом effect
        console.log(result[1]) // вывоходим информацию фразы на английском, требуемую в задание. 

    })
})