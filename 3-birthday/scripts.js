'use strict'


let date = '2022-01-01'
let date2 = '1987-12-29'

function getDate(date) {
    const now = new Date()
    const userDate = new Date(date)
    
    if((now.getFullYear() - 14) < userDate.getFullYear()) {
        return false
    } else if((now.getFullYear() - 14) >= userDate.getFullYear()) {
        return true
    } else {
        return none
    }
   
}

console.log(getDate(date))
console.log(getDate(date2))