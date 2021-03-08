const gameMatrix = [];
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

console.log(gameMatrix);