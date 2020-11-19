
class Game {
    constructor(input) {
        this.optionsPlayerChoice = input;
        this.Winner;
    }

    determineWinner() {
        if (this.optionsPlayerChoice == Computer.getChoice()) {
            this.Winner = "No One";
        } else if (this.optionsPlayerChoice == "rock" && Computer.getChoice() == "scissors") {
            this.Winner = "Player";
        } else if (this.optionsPlayerChoice == "scissors" && Computer.getChoice() == "paper") {
            this.Winner = "Player";
        } else if (this.optionsPlayerChoice == "paper" && Computer.getChoice() == "rock") {
            this.Winner = "Player";
        } else {
            this.Winner = "Computer";
        }
    }

    logOutput() { //final outputs => logging after computation of winnner
        console.log("Playing a game of Roshambo against the computer.");
        console.log(`Player plays ${this.optionsPlayerChoice}!`);
        console.log(`Computer plays ${Computer.getChoice()}!`);
        console.log(`~${this.Winner} wins.~`);
    }
}




class Computer {

    constructor(){
        this.options="none";
        this.choice=['rock','paper','scissors'];
    }

    static determineChoice() {
        let npc = Math.floor((Math.random()*10)%3);
        this.choice = this.options[npc];
    }

    static setProperties() {
        this.choice = "none";
        this.options = ['rock','paper','scissors'];
    }

    static getChoice() {
        return this.choice;
    }
}

var myGame = new Game(process.argv[2].split("=")[1]);
Computer.setProperties();
Computer.determineChoice();
myGame.determineWinner();
myGame.logOutput();



// class Rock {
//     this.beats()
// }
