class Dragon {
    constructor(name, rider) {
        this.name = name
        this.rider = rider
        this.hungry = true
        this.timesEaten = 0   
    }

    greet(rider) {
        return `Hi, ${this.rider}!`
    }
    
    eat() {
        this.timesEaten++
        if(this.timesEaten > 2) {
            this.hungry = false
        }
    }
}

module.exports = Dragon