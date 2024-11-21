'use strict'
/*
let date1 = '2010-11-21';
let date2 = '2010-11-21'; 

function getDate(birthDate, currentDate) {
    const userBirthDate = new Date(birthDate);
    const now = new Date(currentDate); // Используем фиксированную текущую дату

    // Вычисляем разницу в миллисекундах
    const ageInMilliseconds = now - userBirthDate;

    // Преобразуем миллисекунды в годы
    const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365.25; // Учитывая високосные годы
    const ageInYears = ageInMilliseconds / millisecondsInAYear;
    // console.log(Math.floor(ageInYears))

    return Math.floor(ageInYears) >= 14; // Возвращаем true, если больше 14 лет
}

console.log(getDate(date1, '2024-11-21')); //true
console.log(getDate(date2, '2024-11-21')); //false
*/


const VALID_AGE = 14
const dt1 = '2010-11-21' // Сегодняшняя дата
const dt2 = '2010-11-22' // Сегодняшняя дата + 1 день

function hasBdayThisYear (date) {
    const currentMonth = new Date().getMonth()
    const currentDate = new Date().getDate()

    const bdayMonth = new Date(date).getMonth()
    const bdayDate = new Date(date).getDate()

    return currentMonth > bdayMonth || (currentDate >= bdayMonth && currentDate >= bdayDate)
}

function isValidAge(date) {
    const currentYear = new Date().getFullYear()
    const bdayYear = new Date(date).getFullYear()
    const age = currentYear - bdayYear - (hasBdayThisYear(date) ? 0 : 1)

    return age >= VALID_AGE
}

console.log(isValidAge(dt1))
console.log(isValidAge(dt2))