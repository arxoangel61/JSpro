'use strict'
/*
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
*/

const TEXT_LANG = 'en'  //задает язык для описаний эффектов (в данном случае — английский)
const POKE_API = 'https://pokeapi.co/api/v2/' // базовый URL для API Pokémon

const createReq = (url, method = 'GET') => { // функция, которая создает объект XMLHttpRequest для выполнения HTTP-запросов. Она принимает URL и необязательный метод HTTP (по умолчанию GET).
    const req = new XMLHttpRequest()
    req.open(method, url)
    req.send()

    return req
}

const ditto = createReq(`${POKE_API}/pokemon/ditto`)

ditto.addEventListener('load', () => {
    const { abilities } = JSON.parse(ditto.responseText)
    const { ability: { url } } = abilities[0]

    const effectRes = createReq(url)
    /*
    Когда запрос на получение данных о Дитто завершен, он парсит JSON-ответ.

    Из ответа извлекаются способности Дитто (abilities), и берется первая способность (индекс 0).

    Из первой способности извлекается URL, который ведет к дополнительной информации о способности.
    */



    effectRes.addEventListener('load', function () {
        const { effect_entries } = JSON.parse(effectRes.responseText)
        const { effect } = effect_entries.filter(item => item.language.name === TEXT_LANG)[0]

        /*
        После того как запрос на URL способности завершен, он парсит JSON-ответ.

        Из ответа извлекаются записи эффектов (effect_entries).

        Затем фильтруются записи эффектов по языку, указанному в TEXT_LANG, и берется первый элемент.

        Наконец, эффект выводится в консоль.
        */

        console.log(effect)
    })
})
