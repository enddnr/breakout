const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.strokeStyle = "black";
// ctx.stroke();
// ctx.closePath();

let ballX = 20
let ballY = 20

let dx = 2
let dy = 2

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    ballX += dx;
    ballY += dy;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBar();

    if(ballX+dx<10 || ballX+dx>canvas.width) {
        dx = -dx;
    }
    if(ballY+dy < 10) {
        dy = -dy;
    }
    if(ballY + dy > canvas.height - 10) {
        alert("Game Over");
    }
    if(rightPressed) {
        barX += 5;
    } else if (leftPressed) {
        barX -= 5;
    }
}

const barHeight = 10;
const barWidth = 75;
let barX = (canvas.width - barWidth)/2;

function drawBar() {
    ctx.beginPath();
    ctx.rect(barX, canvas.height - barHeight, barWidth, barHeight);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();
}

setInterval(draw, 10);

let rightPressed = false;
let leftPressed = false;

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        //오른쪽 버튼이 눌렸다
        rightPressed = true;
    } else if(e.keyCode == 37) {
        //왼쪽 버튼이 눌렸다
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        //오른쪽 버튼이 떼졌다
        rightPressed = false;
    } else if(e.keyCode == 37) {
        //왼쪽 버튼이 떼졌다
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);