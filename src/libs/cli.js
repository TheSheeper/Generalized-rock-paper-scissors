import promptSync from "prompt-sync";
import TableGenerator from "./tableGenerator.js";

const prompt = promptSync();

export const cli = {
  async selectMove(moves) {
    const promptMessage = `Available moves: \n${moves
      .map((move, index) => `${index + 1} - ${move}`)
      .join("\n")}\n0 - exit\n? - help
      `;
    console.log(promptMessage);

    const selected = prompt("Enter your move: ");
    console.log("Move selected:", moves[selected - 1]);

    if (selected > 0 && selected <= moves.length && selected != "") {
      return selected -1;
    }

    if(selected == 0){
        console.log("Bye");
        process.exit()
    }

    if(selected == "?"){
        new TableGenerator(moves).generateTable()
        return await this.selectMove(moves);
    }

    console.log("Invalid move try again\n");
    return await this.selectMove(moves);
  },
};
