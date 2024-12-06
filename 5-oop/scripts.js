function GamerInfo(race, name, language) {
    this.race = race,
    this.name = name,
    this.language = language,
    this.speak = function() {
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
    comboSpellInfo() {
        if(!this.spell) {
            console.log(`В вашей голове нет логики и заклинание не работают`)
        } else {
            console.log(`Огненный шар создает яркую вспышку, которая вылетает из вытянутого пальца заклинателя.`)
        }
    }
}


let account1 = new Ork('Орк', 'Ivan', 'Орский')
let account2 = new Ork('Орк', 'Petr', 'Орский', true)
// console.log(account1)
// console.log(account1.speak())
// console.log(account2)

// console.log(account1.comboHit())
// console.log(account2.comboHit())

let account3 = new Elf('Эльф', 'Artem', 'Эльфийский', true)
let account4 = new Elf('Эльф', 'Mamai', 'Эльфийский')
// console.log(account3)
// console.log(account3.comboSpell())
// console.log(account3.comboSpellInfo())

// console.log(account4.comboSpell())
// console.log(account4.comboSpellInfo())