(function (window, document, bouncingBall){
    var btn = document.getElementById('btn_start');
    btn.addEventListener("click", function(){ bouncingBall.init();});
})(window, document, bouncingBall);

// (function (window, document, snake, undefined) {
//
//     var btn = document.getElementById('btn_start');
//     btn.addEventListener("click", function(){ snake.init();});
//
//     document.onkeydown = function(event) {
//
//         keyCode = window.event.keyCode;
//         keyCode = event.keyCode;
//
//         switch(keyCode) {
//
//             case 37:
//                 if (direction != 'right') {
//                     direction = 'left';
//                 }
//                 console.log('left');
//                 break;
//
//             case 39:
//                 if (direction != 'left') {
//                     direction = 'right';
//                     console.log('right');
//                 }
//                 break;
//
//             case 38:
//                 if (direction != 'down') {
//                     direction = 'up';
//                     console.log('up');
//                 }
//                 break;
//
//             case 40:
//                 if (direction != 'up') {
//                     direction = 'down';
//                     console.log('down');
//                 }
//                 break;
//         }
//     }
//
//
// })(window, document, snake);