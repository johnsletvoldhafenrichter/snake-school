this.snake = ['box43']

this.direction = 'N'

setInterval(function(){
    move();
}, 1000);


function move() {
    for (let i = 0; i < snake.length; i++) {
        let snakePart = document.getElementById(this.snake[i]);
        snakePart.className = 'box';
    }
    let newNumber = Number(this.snake[0].slice(3)) + positionChange();
    if (newNumber < 10) {
        newNumber = '0' + newNumber;
    }

    let newId = 'box' + newNumber;
    console.log(newId);

    // snake.unshift(newId);
    snake.unshift(checkSnakePositionWithWallPosition(newId));

    if (!checkSnakePositionWithApplePosition()) {
        snake.pop();
    }

    for (let i = 0; i < snake.length; i++) {
        let snakePart = document.getElementById(this.snake[i]);
        snakePart.classList.add('snake');
    }
    
}




function positionChange() {
    switch (direction) {
        case 'N':
            return - 10;
        case 'S':
            return + 10;
        case 'E':
            return + 1;
        case 'W':
            return - 1;   
    }
}


window.addEventListener("keydown", function(e) {
    console.log(e.key)
    if (e.key === "ArrowDown") {
        e.preventDefault();
        direction = 'S';
    };
    if (e.key === "ArrowUp") {
        e.preventDefault();
        direction = 'N';
    };
    if (e.key === "ArrowLeft") {
        e.preventDefault();
        direction = 'W';
    };
    if (e.key === "ArrowRight") {
        e.preventDefault();
        direction = 'E';
    };
});