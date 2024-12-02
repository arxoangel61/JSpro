// cоздаем глобальный обькт
function GamerInfo(race, name, language) {
    this.race = race,
    this.name = name,
    this.language = language,
    this.speak = function() {
        console.log(`Язык персожана: ${this.language}, Имя персонажа: ${this.name}`)
    }
}
// создаем обьект Орк присваиваем ему параметры глобального обьекта
let ork = new GamerInfo('Орк', 'Ivan', 'Орский')
// console.log(ork)
// console.log(ork.speak())
let weapon = {
    weapon: false,
}
ork.prototype = weapon // добавляем через прототип в обьект "орк" параметр weapon (по умолчанию false)
// console.log(ork)

ork.prototype.comboHit = function() {
    this.weapon = true // меняем параметр с false в true
    console.log(`Вы нанесли удар своим оружием`)
}
// console.log(ork.prototype.comboHit()) 



// создаем обьект Эльф присваиваем ему параметры глобального обьекта
let elf = new GamerInfo('Эльф', 'Dimon', 'Эльфийский')
let spell = {
    spell: false
}
elf.prototype = spell
// console.log(elf)

elf.prototype.comboSpell = function() {
    this.spell = true
    console.log(`Вы использывали заклинание "Огненный Шар" `)
}

elf.prototype.comboSpellInfo = function() {
    if(!this.spell) {
        console.log(`В вашей голове нет логики и заклинание не работают`)
    } else {
        console.log(`Огненный шар создает яркую вспышку, которая вылетает из вытянутого пальца заклинателя.`)
    }
}
console.log(elf.prototype.comboSpell())
console.log(elf.prototype.comboSpellInfo())


