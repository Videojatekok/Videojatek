let cards = document.getElementsByClassName('backgroundChange');

function backgroundChangeOnHover(event) {
    event.currentTarget.style.border = '2px groove white'; 
    event.currentTarget.style.backgroundColor = 'rgb(20, 20, 130)';
}

function backgroundChangeOnLeave(event) {
    event.currentTarget.style.border = ''; 
    event.currentTarget.style.backgroundColor = 'rgb(32, 32, 104)';
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', backgroundChangeOnHover);
    cards[i].addEventListener('mouseleave', backgroundChangeOnLeave);
}