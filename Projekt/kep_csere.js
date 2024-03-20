const pong = document.querySelector('.pong')
const tennis = document.querySelector('.tennis')
const space = document.querySelector('.space')

let faceNumber=1;

function PongnextFace(){
    pong.src=`kepek/alaphtmlkepek/pong_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber==4){
        faceNumber=1;
    }
}




function SpacenextFace(){
    space.src=`kepek/alaphtmlkepek/space_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber==4){
        faceNumber=1;
    }
}



function tennisnextFace(){
    tennis.src=`kepek/alaphtmlkepek/tennis_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber==4){
        faceNumber=1;
    }
}

tennis.addEventListener('click',tennisnextFace)
space.addEventListener('click',SpacenextFace)
pong.addEventListener('click',PongnextFace)