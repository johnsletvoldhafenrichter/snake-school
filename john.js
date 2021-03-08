this.gameMatrix = [];
this.gameCanvas = document.getElementById("gameCanvas")

for (let i = 0; i < 8; i++) {
    let array = []
    for (let j = 0; j < 8; j++) {
        if (i === 0 || j === 0) {
            array.push(1)
        } else if (i === 7 || j === 7) {
            array.push(1)
        } else {
            array.push(0)
        }
    }
    gameMatrix.push(array);
}


createGameBoard();

function createGameBoard() {
    for (let i = 0; i < gameMatrix.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row")
        row.id = "row" + i;

        for (let j = 0; j < gameMatrix[i].length; j++) {
            let block = document.createElement("div");
            block.classList.add("box")
            block.id = "box" + i + j
            row.appendChild(block);
        }
        gameCanvas.appendChild(row);
    }
}

function createApple() {
    let oldApple = document.getElementsByClassName("apple")[0];
    oldApple.classList.remove("apple")
    let appleElement = Math.round(Math.random() * (gameMatrix.length * gameMatrix.length));
    let id = "box" + appleElement;
    let boxToBeApple = document.getElementById(id);
    boxToBeApple.classList.add("apple");
}