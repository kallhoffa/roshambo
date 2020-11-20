class Game {
    constructor(player1,player2, type) {
        this.player1 = player1
        this.player2 = player2
        this.name = 'Roshambo'
        if(type === 'LizardSpock'){
            this.name = type
        } 

    }

    whoWins (){
        if (this.player1.choice.name === this.player2.choice.name){
            return "No one"
        }
        for(let i = 0; i < this.player1.choice.beats.length; i++){
            if(this.player1.choice.beats[i] === this.player2.choice.name){
                return this.player1.name
            }
        }

        return this.player2.name
    }

    shoot() { //final outputs => logging after computation of winnner
        console.log(`Playing a game of ${this.name} against the computer.`);
        console.log(`${this.player1.name} plays ${this.player1.choice.name}!`);
        console.log(`${this.player2.name} plays ${this.player2.choice.name}!`);
        console.log(`~${this.whoWins()} wins.~`);
    }


}

module.exports = {
    Game: Game
}