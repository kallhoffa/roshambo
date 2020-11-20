class Option {
    
    constructor(name, beats){
        this.name = name
        this.beats = beats
    }

    static createOptionFromString (input){
        if (input === 'rock' || input === 0){
            return new Rock();
        } else if (input === 'paper' || input === 1 ){
            return new Paper();
        } else if (input === 'scissors' || input === 2){
            return new Scissors();
        } else {
            return false
        }
    }
}



class Rock extends Option{
    constructor(){
        let name = 'rock'
        let beats = ['scissors']
        super(name, beats)
    }
}

class Scissors extends Option{
    constructor(){
        let name = 'scissors'
        let beats = ['paper']
        super(name, beats)
    }
}

class Paper extends Option{
    constructor(){
        let name = 'paper'
        let beats = ['rock']
        super(name, beats)
    }
}

module.exports = {
    Option: Option
}