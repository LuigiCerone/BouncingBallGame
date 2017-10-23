var bouncingBall = (function snake() {
    "use strict";

    var mycanvas = document.getElementById('mycanvas');
    var ctx = mycanvas.getContext('2d');

    const BALL_SIZE = 10;
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

    var btn = document.getElementById('btn_start');
    var direction;
    var score = 0;
    var gameloop;

    var leftPad = {
        x: LEFT_PAD_X,
        y: LEFT_PAD_Y
    };
    var rightPad = {
        x: RIGHT_PAD_X,
        y: LEFT_PAD_Y
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

    var handleClick = function (key) {
        // console.log(key);
        switch (key) {
            case 38:
                if (direction !== 'up') {
                    direction = 'up';
                    console.log('up');
                }
                break;
            case 40:
                if (direction !== 'down') {
                    direction = 'down';
                    console.log('down');
                }
                break;
        }
    };

    var gameDraw = function () {
        if (direction === 'up' && (leftPad.y <= (HEIGHT - PAD_SPEED)) && (rightPad.y >= PAD_SPEED)) {
            leftPad.y += PAD_SPEED;
            rightPad.y -= PAD_SPEED;
        } else if (direction === 'down' && (leftPad.y >= PAD_SPEED) && (rightPad.y <= (HEIGHT - PAD_SPEED))) {
            leftPad.y -= PAD_SPEED;
            rightPad.y += PAD_SPEED;
        }
        clearPad();
        drawPad(leftPad.x, leftPad.y);
        drawPad(rightPad.x, rightPad.y);
    };

    var clearPad = function () {
        ctx.clearRect(0, 0, 100, HEIGHT);
        ctx.clearRect(WIDTH - 100, 0, 100, HEIGHT);
    };

    var init = function () {
        document.addEventListener('keydown', function (event) {
            handleClick(event.keyCode)
        });

        drawPad(leftPad.x, leftPad.y);
        drawPad(rightPad.x, rightPad.y);
        drawMiddleLine()
        gameloop = setInterval(gameDraw, 80);
    };


    return {
        init: init
    };
})();
