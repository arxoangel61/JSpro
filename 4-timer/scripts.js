'use strict'

/*
function happyNewYear(ms) {
    // Устанавливаем дату наступления нового года
    const end = new Date(2025, 0, 1, 0, 0, 0); // 1 января 2025 года
    const now = new Date();

    // Если переданы миллисекунды, добавляем их к текущему времени
    now.setMilliseconds(now.getMilliseconds() + ms);

    const interval = setInterval(() => {
        // Обновляем текущее время
        const currentTime = new Date();
        currentTime.setMilliseconds(currentTime.getMilliseconds() + ms);

        // Вычисляем разницу в миллисекундах
        const timeDifference = end - currentTime;

        // Проверяем, не достигли ли мы нового года
        if (timeDifference < 0) {
            clearInterval(interval);
            console.log("С Новым Годом!");
            return;
        }

        // Вычисляем оставшееся время
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 30); // Примерно

        // Форматируем результат
        const result = `${months} месяцев, ${days % 30} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
        console.log(result);
    }, 1000);


    //используем чтобы остановить безконечность получаемых данных
    setTimeout(() => {
        clearInterval(interval)
    }, ms)
}

// Запускаем функцию, передавая 5000 миллисекунд (5 секунд)
happyNewYear(5000);
*/

window.addEventListener('load', () => {
    const page = {
        time: {
            'months': "",
            'days': "",
            'hours': "",
            'minutes': "",
            'seconds': "",
        },
        'wrapper': document.querySelector('.timer__wrapper'),
    }

    function getTimeForDate(ms) {
        const second = Math.floor(ms / 1000);
        const minute = Math.floor(second / 60);
        const hour = Math.floor(minute / 60);
        const day = Math.floor(hour / 24);
        const month = Math.floor(day / 30.425);

        return {
            'months': month % 12,
            'days': Math.floor(day % 30.425),
            'hours': hour % 24,
            'minutes': minute % 60,
            'seconds': second % 60,
        }
    }
    function createLabel(num, key) {
        const labels = {
            months: { one: 'месяц', few: 'месяца', many: 'месяцев' },
            days: { one: 'день', few: 'дня', many: 'дней' },
            hours: { one: 'час', few: 'часа', many: 'часов' },
            minutes: { one: 'минута', few: 'минуты', many: 'минут' },
            seconds: { one: 'секунда', few: 'секунды', many: 'секунд' },
        }

        const plural = new Intl.PluralRules('ru-RU', { type: 'cardinal' }).select(num);
        return labels[key][plural]
    }

    function renderTimer(time) {
        const data = getTimeForDate(time)
        Object.entries(data).map(([key, value]) => {
            const text = createLabel(value, key);
            const count = data[key].toString().padStart(2, '0');
            page.time[key].text.innerHTML = text;
            page.time[key].value.innerHTML = count;
        })
    }

    function templateMessage(text) {
        return `<div style="color: red; font-weight: 700; font-size: 32px; text-align: center;">${text}</div>`
    }

    function createTimerContainer() {
        const timer = document.createElement('div');
        timer.classList.add('timer');

        const title = document.createElement('h2');
        title.classList.add('timer__title');
        title.innerHTML = "До <span>нового года</span> осталось:"
        Object.keys(page.time).forEach(key => {
            const div = document.createElement('div');
            div.classList.add(`timer__column`, `timer__${key}`);

            const value = document.createElement('div');
            value.classList.add(`timer__${key}`, `timer__count`)

            const text = document.createElement('div');
            text.classList.add(`timer__${key}`, `timer__description`);
            div.append(value, text)
            page.wrapper.append(div)
            page.time[key] = {
                value,
                text
            }
            timer.append(div)
        })
        page.wrapper.append(timer);
    }

    let diff = new Date(`${new Date().getFullYear() + 1}-01-01T00:00:00`) - Date.now();
    createTimerContainer();
    if (diff < 0) {
        console.log(page.wrapper.setAttribute('style', 'flex-direction: column;'));
        page.wrapper.innerHTML = templateMessage('Ошибка')
        page.wrapper.innerHTML += templateMessage('Укажите дату и время позднее текущего')
    } else {

        const interval = setInterval(() => {
            if (Math.floor(diff / 1000) === 0) {
                page.wrapper.innerHTML = templateMessage('Happy New Year!')
                clearInterval(interval);
                return
            }
            renderTimer(diff -= 1000)
        }, 1000);
    }
})