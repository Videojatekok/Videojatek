const pong = document.querySelector('.pong')
const tennis = document.querySelector('.tennis')
const space = document.querySelector('.space')
const pacman = document.querySelector('.pacman');
const mario = document.querySelector('.mario');
const tetris = document.querySelector('.tetris');
const doom = document.querySelector('.doom');
const zelda = document.querySelector('.zelda');
const cs = document.querySelector('.cs');
const wow = document.querySelector('.wow');
const mc = document.querySelector('.mc');
const xbox = document.querySelector('.xbox');
const vr = document.querySelector('.vr');


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

function PacmannextFace(){
    pacman.src = `kepek/alaphtmlkepek/pacman_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}


function MarionextFace(){
    mario.src = `kepek/alaphtmlkepek/mario_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}


function TetrisnextFace(){
    tetris.src = `kepek/alaphtmlkepek/tetris_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}


function DoomnextFace(){
    doom.src = `kepek/alaphtmlkepek/doom_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}


function ZeldanextFace(){
    zelda.src = `kepek/alaphtmlkepek/zelda_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}


function CsnextFace(){
    cs.src = `kepek/alaphtmlkepek/cs_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}


function WownextFace(){
    wow.src = `kepek/alaphtmlkepek/wow_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}


function McnextFace(){
    mc.src = `kepek/alaphtmlkepek/mc_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}


function XboxnextFace(){
    xbox.src = `kepek/alaphtmlkepek/xbox_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}


function VrnextFace(){
    vr.src = `kepek/alaphtmlkepek/vr_${faceNumber}.png`;
    faceNumber++;
    if(faceNumber == 4){
        faceNumber = 1;
    }
}

tennis.addEventListener('click',tennisnextFace)
space.addEventListener('click',SpacenextFace)
pong.addEventListener('click',PongnextFace)
pacman.addEventListener('click', PacmannextFace);
mario.addEventListener('click', MarionextFace);
tetris.addEventListener('click', TetrisnextFace);
doom.addEventListener('click', DoomnextFace);
zelda.addEventListener('click', ZeldanextFace);
cs.addEventListener('click', CsnextFace);
wow.addEventListener('click', WownextFace);
mc.addEventListener('click', McnextFace);
xbox.addEventListener('click', XboxnextFace);
vr.addEventListener('click', VrnextFace);