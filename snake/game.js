import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsiderGrid } from './grid.js';

const gameBoard = document.getElementById('game-board')
let lastRenderTime = 0;
let gameOver = false

requestAnimationFrame(main);

function main(currenTime) {
    if (gameOver) {
        if (confirm('Voce perdeu!  ')) {
            location = '/'
        }
        return
    }
    requestAnimationFrame(main);

    const secondsSinceLastRender = (currenTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) { return }

    lastRenderTime = currenTime;

    update()
    draw()
}

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsiderGrid(getSnakeHead()) || snakeIntersection()
}
