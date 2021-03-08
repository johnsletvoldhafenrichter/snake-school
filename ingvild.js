this.snake = {
    position: 44,
    direction: 'E'
}

setInterval(function(){
    move();
}, 5000);


function move() {
    console.log(snake.position)
    console.log(this.snake.position);
    let id = `box${snake.position}`;
}



function positionChange(snake) {
    switch (snake.direction) {
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