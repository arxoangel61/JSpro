class Car {
    #marks
    #models
    #_runs

    constructor(mark, model, run) {
        this.#marks = mark
        this.#models = model
        this.#runs = run
    }

    set #runs(run) {
        this.#_runs = run.split('').join('')
    }

    get #runs() {
        return this.#_runs.split('').join('')
    }

    checkRuns(run) {
        return this.#runs === run
    }

    changeRuns(oldRun, newRun) {
        if(!this.checkRuns(oldRun)) {
            return false
        }
        this.#runs = newRun
        return true
    }
    info() {
        return `Марка авто: ${this.#marks}, Год выпуска: ${this.#models}г, Пробег: ${this.#runs}км`
    }
}

const car = new Car('Mark2', '1998', '100000')
console.log(car.info())

console.log(car.checkRuns('100000'))
car.changeRuns('100000', '250505')
console.log(car)