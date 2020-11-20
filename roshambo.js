
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const {Computer} = require('./player')
const {Human} = require('./player')
const {Game} = require('./game')



let humanInput = argv.move
let humanName = argv.name ? argv.name : 'Player'

let player1 = new Human(humanName, humanInput)
let player2 = new Computer()

var myGame = new Game(player1, player2);

myGame.shoot()

