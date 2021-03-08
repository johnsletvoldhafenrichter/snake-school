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
createApple();

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
    if (oldApple) {
        oldApple.classList.remove("apple")
    }
    let appleElementX = makeCoord();
    let appleElementY = makeCoord();
    let id = "box" + appleElementX + appleElementY;
    let boxToBeApple = document.getElementById(id);
    boxToBeApple.classList.add("apple");
}

function makeCoord() {
    return Math.round(Math.random() * (gameMatrix.length - 1));
}

function checkSnakePositionWithApplePosition() {
    let apple = document.getElementsByClassName("apple")[0];
    for (let i = 0; i < this.snake.length; i++) {
        if (this.snake[i] === apple.id) {
            createApple();
            return true;
        }
    }
    return false;
}

function checkSnakePositionWithWallPosition() {
    let id = this.snake[0].slice(-2);

    console.log(id.slice(0, 1), id.slice(1))
    if (id.slice(1) == 0 || id.slice(1) == 7) {

        console.log(id)

    } else if (id.slice(0, 1) == 0 || id.slice(0, 1) == 7) {

        console.log(id)
    }
}