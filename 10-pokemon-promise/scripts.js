'use strict'


const TEXT_LANG = 'en'  //задает язык для описаний эффектов (в данном случае — английский)
const POKE_API = 'https://pokeapi.co/api/v2/' // базовый URL для API Pokémon


function getData(url, errorMessage) {
    return fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(`${errorMessage} ${response.status}`)
            }
            return response.json()
        })
}

getData(`${POKE_API}/pokemon/ditto`, `Can not get info`)
    .then(({abilities}) => {
        // console.log(abilities[0])
        // Получаем URL для первой способности
        const abilityUrl = abilities[0].ability.url;
        return getData(abilityUrl, 'Can not get Url')  
    })
    .then(({effect_entries}) => {
        // console.log(effect_entries); // Выводим данные о способности в консоль
        const effectEng = effect_entries.find(entry => entry.language.name === TEXT_LANG).effect; //делаем поиск и находим английский язык
        console.log(effectEng);
    })
    .catch(error => console.log(error)) 






