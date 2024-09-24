import { Game } from "./src/game.js";
import { cli } from "./src/libs/cli.js";

let moves = process.argv.slice(2); 

if(moves.length < 3){
    console.error("The number of moves must be higher than 3")
    process.exit()
}
if(moves.length % 2 == 0){
    console.error("The number of moves must be odd")
    process.exit()
}

let checkUnique = new Set(moves)
if(checkUnique.size != moves.length){
    console.error("Each move must be unique")
    process.exit()
}

let game = new Game(moves)

console.log("HMAC:", game.computerSelection())

const playerMove = await cli.selectMove(moves)

const {computerMove, result, key } = game.compareResult(playerMove)

console.log("Computer move: ", computerMove)
console.log(result)
console.log("HMAC Key:", key)