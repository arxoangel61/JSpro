'use strict'


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
