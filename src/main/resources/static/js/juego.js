document.addEventListener("mousemove", mouseMoveHandler, false);
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var score = 0;

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    var relativeY = e.clientY - canvas.offsetTop;
    if(relativeX > x){
        if(relativeY > y){
            dy = 2
        }else{
            dy = -2
        }
        dx = 2;
    }else{
        if(relativeY > y){
            dy = 2
        }else{
            dy = -2
        }
        dx = -2;
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#dd7a1a";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#5add38";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawScore();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius||y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        alert("GAME OVER");
        clearInterval(interval);
    }
    x += dx;
    y += dy;
}
var interval = setInterval(draw, 10);