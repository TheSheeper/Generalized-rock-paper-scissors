import { HMACGenerator } from "./libs/hmacGenerator.js";
import { KeyGenerator } from "./libs/keyGenerator.js";

export class Game {
    key = new KeyGenerator().generate()
  moves = [];
  computerMove

  constructor(moves) {
    this.moves = moves;
  }

  compareResult(playerMove){
    if(!this.computerMove){
        console.error("The computer should move first")
        process.exit()
    }
    const computer = this.moves.indexOf(this.computerMove)
    const result = this.getResult(playerMove, computer, this.moves.length)

    return {computerMove: this.computerMove, result: result, key: this.key}
  }

  getResult(playerMove, computerMove, n) {
    let half = Math.floor(n / 2);

    let result = Math.sign(((playerMove - computerMove + half + n) % n) - half);
    if (result === 0) return 'draw';
    return result > 0 ? 'win' : 'lose';
  }

  computerSelection() {
    let random = Math.floor(Math.random() * this.moves.length);
    this.computerMove = this.moves[random]
    return new HMACGenerator(this.key).generateHMAC(this.computerMove);
  }
}
