const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const {Computer} = require('./player')
const {Human} = require('./player')
const {Game} = require('./game')
const { ADDRCONFIG } = require('dns')
const game = require('./game')



let humanInput = argv.move
let humanName = argv.name ? argv.name : 'Player'
let gameType = argv.type ? argv.type : 'Normal'

if(gameType !== 'LizardSpock' && gameType !== 'Normal'){
    console.log(`type must be LizardSpock or Normal`)
    process.exit(1)   
}

if(!humanInput){
    console.log('please input a move')
    process.exit(1)
}

let player1 = new Human(humanName, humanInput)
let player2 = new Computer(gameType)

var myGame = new Game(player1, player2, gameType);

myGame.shoot()

