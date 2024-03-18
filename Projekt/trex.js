document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector(".dino");
    const grid = document.querySelector(".grid");
    const alert = document.querySelector("#alert");

    let position = 0;
    let gravity = 0.9;
    let isJumping = false;
    let isGameOver = false;
    let score = 0;
6
function control(event) {
        if(event.keyCode === 32){
        if(!isJumping){
            isJumping = true;
            jump();
        }
    }
}

function jump(){
    let count = 5;
    let jumpTimerId = setInterval(() => {
        if(count == 20){
            clearInterval(jumpTimerId)

            let downTimerId = setInterval(() => {
                if(count == 5){
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                position -= 5;
                position = position * gravity;
                dino.style.bottom = position + 'px';
                count --;
            }, 20);
        }
        position += 30;
        position = position * gravity;
        dino.style.bottom = position + 'px';
        count++;
    },20);
}

function generateCactus() {
    let randomTime = (Math.random() * 2000) + 500;
    let cactusPosition = 1500;
    let cactus = document.createElement('div');

    if(!isGameOver){
        cactus.classList.add('cactus');
        cactus.style.left = cactusPosition + 'px';
        grid.appendChild(cactus);
    }

    let downTimerId = setInterval(() => {
        if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(downTimerId);
            alert.innerHTML = 'Game Over! Score: ' + score;
            isGameOver = true;
            while(grid.firstChild){
                grid.removeChild(grid.lastChild);
            }
        }
    if(cactusPosition == 0){
        score ++;
        alert.innerHTML = score;
    }

    cactusPosition -= 10;
    cactus.style.left = cactusPosition + 'px';
    },30);

    if(!isGameOver){
        setTimeout(generateCactus, randomTime);
    }
}

document.addEventListener('keyup', control)
generateCactus();
});
