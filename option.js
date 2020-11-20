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
        } else if (input === 'lizard' || input === 3){
            return new Lizard();
        } else if (input === 'spock' || input === 4){
            return new Spock();
        } else {
            return false
        }
    }
}



class Rock extends Option{
    constructor(){
        let name = 'rock'
        let beats = ['scissors', 'lizzard']
        super(name, beats)
    }
}

class Scissors extends Option{
    constructor(){
        let name = 'scissors'
        let beats = ['paper','lizard']
        super(name, beats)
    }
}

class Paper extends Option{
    constructor(){
        let name = 'paper'
        let beats = ['rock','spock']
        super(name, beats)
    }
}

class Lizard extends Option{
    constructor(){
        let name = 'lizard'
        let beats = ['rock','spock']
        super(name, beats)
    }
}

class Spock extends Option{
    constructor(){
        let name = 'spock'
        let beats = ['rock','scissors']
        super(name, beats)
    }
}

module.exports = {
    Option: Option
}