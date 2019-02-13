var bouncingBall = (function snake() {
    "use strict";

    var mycanvas = document.getElementById('mycanvas');
    var ctx = mycanvas.getContext('2d');

    const WIDTH = mycanvas.width;
    const HEIGHT = mycanvas.height;

    const PAD_HEIGHT = 40;
    const PAD_WIDTH = 10;
    const SPACE_FROM_BORDER = 5;
    const LEFT_PAD_X = SPACE_FROM_BORDER;
    const LEFT_PAD_Y = (HEIGHT / 2) - (PAD_HEIGHT / 2);
    const RIGHT_PAD_X = WIDTH - PAD_WIDTH - SPACE_FROM_BORDER;
    const RIGHT_PAD_Y = (HEIGHT / 2) - (PAD_HEIGHT / 2);
    const PAD_SPEED = 10;

    const BALL_SIZE = 10;
    var BALL_SPEED_X = +8;
    var BALL_SPEED_Y = -8;

    var btn = document.getElementById('btn_start');
    var upPressed = false,
        downPressed = false;

    var score = 0;
    var gameloop;

    var leftPad = {
        x: LEFT_PAD_X,
        y: LEFT_PAD_Y
    };
    var rightPad = {
        x: RIGHT_PAD_X,
        y: RIGHT_PAD_Y
    };
    var ball = {
        x: WIDTH/2,
        y: HEIGHT/2
    };

    var drawMiddleLine = function () {
        ctx.beginPath();
        ctx.moveTo(400, 0);
        ctx.lineTo(400, 400);
        ctx.fillStyle = 'black';
        ctx.stroke();
    };

    var drawPad = function (x, y) {
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, PAD_WIDTH, PAD_HEIGHT);
        ctx.stroke();
    };

    var handleKeyDown = function (key) {
        // console.log(key);
        switch (key) {
            case 38:
                    upPressed = true;
                break;
            case 40:
                    downPressed = true;
                break;
        }
    };

    var handleKeyUp = function (key) {
        // console.log(key);
        switch (key) {
            case 38:
                upPressed = false;
                break;
            case 40:
                downPressed = false;
                break;
        }
    };

    var gameDraw = function () {
        if (upPressed && (leftPad.y <= (HEIGHT - PAD_SPEED)) && (rightPad.y >= PAD_SPEED)) {
            leftPad.y += PAD_SPEED;
            rightPad.y -= PAD_SPEED;
        } else if (downPressed && (leftPad.y >= PAD_SPEED) && (rightPad.y <= (HEIGHT - PAD_SPEED))) {
            leftPad.y -= PAD_SPEED;
            rightPad.y += PAD_SPEED;
        }
        // Clear the canvas area.
        clearCanvas();

        // Draw the pads.
        drawPad(leftPad.x, leftPad.y);
        drawPad(rightPad.x, rightPad.y);

        // Draw the ball ball.

        ball.x += BALL_SPEED_X;
        ball.y += BALL_SPEED_Y;

        // Top and bottom wall.
        if(ball.y + BALL_SPEED_Y > HEIGHT-BALL_SIZE || ball.y + BALL_SPEED_Y < BALL_SIZE) {
            BALL_SPEED_Y = -BALL_SPEED_Y;
        } else if (collision(leftPad) || collision(rightPad)){
            score++;
            BALL_SPEED_X = -BALL_SPEED_X;
        }

        // Player has lost.
        if(ball.x + BALL_SPEED_X > WIDTH-BALL_SIZE || ball.x + BALL_SPEED_X < BALL_SIZE) {
           console.log("You've lost");
           score = 0;
           resetBall();
        }
        drawBall(ball.x, ball.y);

        // Update text score.
        updateScore();
    };

    var resetBall = function () {
        ball = {
            x: WIDTH/2,
            y: HEIGHT/2
        };
    };

    var collision = function (Pad)  {
        var distX = Math.abs(ball.x - Pad.x-PAD_WIDTH/2);
        var distY = Math.abs(ball.y - Pad.y-PAD_HEIGHT/2);

        if (distX > (PAD_WIDTH/2 + BALL_SIZE)) { return false; }
        if (distY > (PAD_HEIGHT/2 + BALL_SIZE)) { return false; }

        if (distX <= (PAD_WIDTH/2)) { return true; }
        if (distY <= (PAD_HEIGHT/2)) { return true; }

        var dx=distX-PAD_WIDTH/2;
        var dy=distY-PAD_HEIGHT/2;
        return (dx*dx+dy*dy<=(BALL_SIZE*BALL_SIZE));
    };

    var clearCanvas = function () {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    };

    var drawBall = function (x,y) {
        ctx.beginPath();
        ctx.arc(x, y, BALL_SIZE, 0, Math.PI*2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    };

    var init = function () {
        document.addEventListener('keydown', function (event) {
            handleKeyDown(event.keyCode)
        });
        document.addEventListener('keyup', function (event) {
            handleKeyUp(event.keyCode)
        });

        drawPad(leftPad.x, leftPad.y);
        drawPad(rightPad.x, rightPad.y);
        drawMiddleLine();
        drawBall(ball.x, ball.y);
        gameloop = setInterval(gameDraw, 50);
    };

    var updateScore = function (){
        ctx.font="18px Georgia";
        ctx.fillText("Score : " + score,WIDTH / 2,20);
    };

    return {
        init: init
    };
})();
