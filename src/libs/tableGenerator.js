import { AsciiTable3 } from "ascii-table3";
import { Game } from "../game.js";

export default class TableGenerator{
    data = []
    constructor(data){
        this.data = data
    }

    generateTable(){
        let game = new Game()
        
        let rows = this.data.map((move)=>{
            let row = this.data.map((sub)=>{
                return game.getResult(this.data.indexOf(sub), this.data.indexOf(move), this.data.length)
            })
            row.unshift(move)
            return row
        })
        
        let table = new AsciiTable3("List of moves")
        .setHeading("v PC \\ User >", ...this.data)
        .addRowMatrix(rows)
        
        console.log(table.toString())
    }
}