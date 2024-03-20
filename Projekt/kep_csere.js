const pong = document.querySelector('.pong')

let faceNumber=1;

function nextFace(){
    pong.src=`kepek/alaphtmlkepek/pong_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber==4){
        faceNumber=1;
    }
}

pong.addEventListener('click',nextFace)