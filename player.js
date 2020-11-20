const {Option} = require('./option')

class Player {

    constructor (name){
        this.choice = {}
        this.name = name
    }

}


class Computer extends Player{

    constructor(){
        super('Computer')
        this.determineChoice()
    }

    determineChoice() {
        let randomOption = Math.floor((Math.random()*10)%3);
        this.choice = Option.createOptionFromString(randomOption)
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