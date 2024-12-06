/*
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

*/

/*
    Title: Наследование - домашнее задание
    Description: 
        Создать базовый класс персонжа с параметрами: раса, имя, язык и метод - говорить(выводит язык и имя в консоль).
        Создать класс Орка, который наследуется от персонажа, у которого
        есть оружие и который имеет метод - удара.
        Создать класс Эльфа, который наследуется от персонажа, у 
        которого есть типа заклинаний и метод - создать заклинание.
*/
const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Character.prototype.talk = function () {
    console.log(`Язык: ${this.language}, Имя: ${this.name}`);
};

const Ork = function (race, name, language, weapon) {
    Character.call(this, race, name, language); //наследование  параметров с Character
    this.weapon = weapon;
};

Ork.prototype = Object.create(Character.prototype); // связывание прототипов через Object.create
Ork.prototype.constructor = Ork; // переиспользованние конструктора

Ork.prototype.blow = function () { // функция удара
    console.log(`${this.race} по имени ${this.name} использует своё оружие ('${this.weapon}') и наносит удар!`);
};

const Elf = function (race, name, language, spell) {
    Character.call(this, race, name, language); //наследование  параметров с Character
    this.spell = spell;
};

Elf.prototype = Object.create(Character.prototype); // связывание прототипов через Object.create
Elf.prototype.constructor = Elf; // переиспользованние конструктора

Elf.prototype.createSpell = function () { // функция удара магией
    console.log(`${this.race} по имени ${this.name} использует своё заклинание ('${this.spell}') и наносит удар!`);
};

const ork = new Ork('Орк', "Гул'дан", 'Орочий', 'Топор');
const elf = new Elf('Эльф', 'Sulmeldis', 'Эльфийский', 'Взрыв');
ork.talk();
ork.blow();

elf.talk();
elf.createSpell();

console.log('ork instanceof Character:', ork instanceof Character);
console.log('ork instanceof Ork:', ork instanceof Ork);
console.log('ork instanceof Elf:', ork instanceof Elf);

console.log('elf instanceof Character:', elf instanceof Character);
console.log('elf instanceof Ork:', elf instanceof Ork);
console.log('elf instanceof Elf:', elf instanceof Elf);
