const square = document.querySelectorAll('.square ');
let timeLeft = document.querySelector('#timeLeft');
let score = document.querySelector('#score');
const startGame = document.querySelector('.startGame');
const bestScore = document.querySelector('#bestScore');

bestScore.innerHTML = localStorage.getItem('BestScore');

let hitPosition = null;
let result = 0;
let currentTime = timeLeft.innerHTML;
let countDownTimer;
let moleTimerId;

function randomMole(){
    square.forEach(item => {
        item.classList.remove('mole');
    });
    let randomPos = square[Math.floor(Math.random()*9)];
    randomPos.classList.add('mole');
    hitPosition = randomPos.id;
}

function countDown(){
    currentTime--;
    timeLeft.innerHTML = currentTime;
    if (currentTime == 0){
        clearInterval(countDownTimer);
        clearInterval(moleTimerId);
        startGame.style.display = 'block';
        startGame.innerHTML = 'GAME OVER!<br> Your final score is: ' + result;
        if (result > bestScore.innerHTML){
            bestScore.innerHTML = result;
            localStorage.setItem('BestScore', result);

        }
    }
}

square.forEach(item => {
    item.addEventListener('mouseup', () => {
        if(item.id == hitPosition){
            result++;
            score.innerHTML = result;
        }    
    })
});

startGame.addEventListener('click', () => {
    startGame.style.display = 'none';
    currentTime = 5;
    timeLeft.innerHTML = currentTime;
    result = 0;
    score.innerHTML = result;
    moleTimerId = setInterval(randomMole, 700);
    countDownTimer = setInterval(countDown, 1000);
});