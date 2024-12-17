class GamerInfo {
    race
    name
    language
    constructor(race, name, language) {
        this.race = race
        this.name = name
        this.language = language
    }
    
    speak() {
        console.log(`Язык персожана: ${this.language}, Имя персонажа: ${this.name}`)
    }
}


class Ork extends GamerInfo {
    constructor(race, name, language, weapon = false) {
        super(race, name, language)
        this.weapon = weapon
    }

    comboHit() {
        if(!this.weapon) {
            console.log(`В ваших руках нет оружения`)
        } else {
            console.log(`Вы нанесли удар`)
        }
    }
    
    speak() {
        console.log(`Язык персожана: ${this.language}, Имя Орка: ${this.name}, Боевой клич: ЗА ОРДУ!!!`)
    }
}

class Elf extends GamerInfo {
    constructor(race,name, language, spell = false) {
        super(race, name, language)
        this.spell = spell
    }

    comboSpell() {
        if(!this.spell) {
            console.log(`Вы не знаете не каких заклинаний`)
        } else {
            console.log(`Вы использывали заклинание "Огненный Шар" `)
        }
    }

    speak() {
        console.log(`Язык персожана: ${this.language}, Имя Эльфа: ${this.name}, Боевой клич: ЗА АЛЬЯНС!!!`)
    }
}


let account1 = new Ork('Орк', 'Гаррош', 'Орский')
let account2 = new Ork('Орк', 'Гулдан', 'Орский', true)
// console.log(account1)
// console.log(account1.speak())
console.log(account2.speak())

// console.log(account1.comboHit())
// console.log(account2.comboHit())

let account3 = new Elf('Эльф', 'Шандриса Оперенная Луна', 'Эльфийский', true)
let account4 = new Elf('Эльф', 'Джерод Песнь Теней', 'Эльфийский')
console.log(account3.speak())
console.log(account3.comboSpell())


