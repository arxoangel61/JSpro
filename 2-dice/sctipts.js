// Поддерживаемые типы: D4, D6, D8, D10, D12, D16, D20.
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

