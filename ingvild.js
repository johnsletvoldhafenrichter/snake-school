this.snake = ['box43']

this.direction = 'E'

setInterval(function(){
    move();
}, 1000);


function move() {
    for (let i = 0; i < snake.length; i++) {
        let snakePart = document.getElementById(this.snake[i]);
        snakePart.className = 'box';
    }
    let newNumber = Number(this.snake[0].slice(3)) + positionChange();

    let newId = 'box' + newNumber;

    snake.unshift(newId);
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
            return + 1;   
    }
}