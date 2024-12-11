'use strict'

class Billing {
    constructor(amount) {
        this.amount = amount; // Сумма счета
    }

    сalculateTotal() { // функция будет переопределена в подклассах
        return this 
    }
}

class fixBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    сalculateTotal() { 
        return this.amount //возвращает текущее значение amount
    }
}

class hourBilling extends Billing {
    constructor(amount, hours) {
        super(amount)
        this.hours = hours
    }
    сalculateTotal() {
        return this.amount * this.hours // возвращает произведение amount и hours
    }
}

class itemBilling extends Billing {
    constructor(amount, elem) {
        super(amount)
        this.elem = elem
    }

    сalculateTotal() {
        return this.amount * this.elem // возвращает произведение amount и elem
    }
}

const fix = new fixBilling(1000)
console.log(fix.сalculateTotal())

const hour = new hourBilling(100, 5)
console.log(hour.сalculateTotal())

const item = new itemBilling(200, 3)
console.log(item.сalculateTotal())