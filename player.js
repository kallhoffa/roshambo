const game = require('./game')
const {Option} = require('./option')

class Player {

    constructor (name){
        this.choice = {}
        this.name = name
    }

}


class Computer extends Player{

    constructor(gameType){
        super('Computer')
        this.numOptions = 3
        if(gameType === 'LizardSpock'){
            this.numOptions = 5
        }
        this.choice = this.determineChoice()
    }

    determineChoice() {
        let randomOption = Math.floor((Math.random()*this.numOptions));
        return Option.createOptionFromString(randomOption)
    }

}

class Human extends Player{
    
    constructor(name, input){
        super(name)
        this.choice = Option.createOptionFromString(input)
    }
}

module.exports = {
    Player: Player,
    Human: Human, 
    Computer: Computer
}