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

function checkSnakePositionWithWallPosition(idTest) {
    let id = idTest.slice(-2);

    if (id.slice(1) == 0 || id.slice(1) == 7) {
        if (direction === "E") {
            return this.snake[0].slice(0, 4) + "0"
        }
        return this.snake[0].slice(0, 4) + (gameMatrix.length - 1)
    } else if (id.slice(0, 1) == 0 || id.slice(0, 1) == 7) {
        if (direction === "N") {
            return "box" + (gameMatrix.length - 1) + this.snake[0].slice(4, 5)
        }
        return "box0" + this.snake[0].slice(4, 5)
    }

    return idTest
}

window.addEventListener("keydown", function(e) {
    console.log(e.key)
    if (e.key === "ArrowDown") {
        e.preventDefault()
    };
    if (e.key === "ArrowUp") {
        e.preventDefault()
    };
    if (e.key === "ArrowLeft") {
        e.preventDefault()
    };
    if (e.key === "ArrowRight") {
        e.preventDefault()
    };
});