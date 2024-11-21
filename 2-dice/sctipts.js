'use strict'

// Поддерживаемые типы: D4, D6, D8, D10, D12, D16, D20.
/*
function game(start) {
    let numMin = 1;
    const games = [
        {name: 'D4', numMax: 4},
        {name: 'D6', numMax: 6},
        {name: 'D8', numMax: 8},
        {name: 'D10', numMax: 10},
        {name: 'D12', numMax: 12},
        {name: 'D20', numMax: 20},
    ]
    const gamesInfo = games.find(c => c.name === start) // проверка
    // console.log(gamesInfo)
    if(!gamesInfo) {
        return null
    }
    return numRandom(numMin, gamesInfo.numMax)
}
console.log(game('D20'))

function numRandom(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min)
}

*/

const acceptDices = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];

function getRandom(min = 1, max = 20) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function errorMessage(dice) {
    if (!acceptDices.includes(dice)) {
        return `Игральная кость ${dice} не подходит для игры.Доступные значения: [${acceptDices.join(', ')}]`;
    }
    return null;
}

function getRandomDice(dice, fn) {
    const error = errorMessage(dice);
    if (error) return error;
    const max = fn(dice);
    return { dice, num: getRandom(1, max) };
}

function consoleRandomResult(fn) {
    //  Наполнение массива через генерацию данных
    console.log('\n---НАПОЛНЕНИЕ МАССИВА ЧЕРЕЗ ГЕНЕРАЦИЮ ДАННЫХ---');
    const iteration = getRandom(1, 20);
    const diceRollArray = [];

    for (let i = 0; i < iteration; i++) {
        const result = getRandomDice('d' + getRandom(1, 20), fn);
        if (result) diceRollArray.push(result);
    }

    const diceMap = new Map([['iteration', iteration]]);

    const diceSet = new Set(diceRollArray.filter((fl) => fl?.dice).map((item) => diceRollArray.find((x) => x.dice === item.dice).dice));

    for (const dice of diceSet) {
        const diceRolls = diceRollArray.filter((fl) => fl.dice === dice).map((dice) => dice.num);
        diceMap.set(dice, diceRolls);
    }

    console.log(diceMap);
}
function getMaxPattern1(dice) {
    const allDices = [
        { dice: 'd4', max: 4 },
        { dice: 'd6', max: 6 },
        { dice: 'd8', max: 8 },
        { dice: 'd10', max: 10 },
        { dice: 'd12', max: 12 },
        { dice: 'd16', max: 16 },
        { dice: 'd20', max: 20 },
    ];
    return allDices.find((find) => find.dice === dice)?.max;
}
function getMaxPattern2(dice) {
    return Number.parseInt(dice.replace(new RegExp('\\D+', 'g'), ''));
}
function getMaxPattern3(dice) {
    const pattern = new RegExp('\\d+', 'g');
    return Number.parseInt(dice.match(pattern));
}

console.log('\n------------------VARIANT - 1------------------\n\n');
consoleRandomResult(getMaxPattern1);
console.log('\n------------------VARIANT - 2------------------\n\n');
consoleRandomResult(getMaxPattern2);
console.log('\n------------------VARIANT - 3------------------\n\n');
consoleRandomResult(getMaxPattern3);