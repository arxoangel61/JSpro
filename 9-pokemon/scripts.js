'use strict'

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto'); //делаем запрос
request.send(); // запрашиваем ответ

request.addEventListener('load', function() { // сделали отображения
    const date = JSON.parse(this.responseText) //парсим информацию в product
    console.log(date)

    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/ability/7/')
    request.send(); // запрашиваем ответ

    request.addEventListener('load', function() { // сделали отображения
        const {effect_entries} = JSON.parse(this.responseText) //парсим информацию в product
        console.log(effect_entries)

        let result = effect_entries.map(item => item.effect)
        console.log(result[1])

    })
})