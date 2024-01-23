var rn;
var current_score = 0;
function bubble() {

    var cut = '';
    for (i = 1; i <= 100; i++) {
        var number = Math.floor(Math.random() * 10)
        cut += `<div id="bubble">${number}</div>`
    }
    document.querySelector('.pbtn').innerHTML = cut;
}
function stopwatch() {

    var timeinterval = document.querySelector('.timer')
    var timer = 60;
    setInterval(() => {
        if (timer > 0) {
            timer--;
            timeinterval.innerHTML = timer;
        }
        else {
            document.querySelector('.pbtn').innerHTML = `<h1>GAME OVER</h1>`
            clearInterval(timer)
        }
    }, 1000)

}
function hit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector('.board').innerHTML = rn;
}
function score() {
    current_score += 10;
    document.querySelector('.score').innerHTML = current_score
}
function game() {

    document.querySelector('.pbtn').addEventListener('click', (dets) => {
        var number = Number(dets.target.textContent);
        if (number === rn) {
            score();
            hit();
            bubble();
        }
    })
}
function start_game(){

    document.querySelector('.button').addEventListener('click', () => {
        bubble();
        stopwatch();
        hit()
        game()
    })
}
start_game();

