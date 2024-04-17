let cards = document.getElementsByClassName('backgroundChange');

function backgroundChangeOnHover(event) {
    event.currentTarget.style.border = '1px solid black'; // Using currentTarget instead of target
}

function backgroundChangeOnLeave(event) {
    event.currentTarget.style.border = ''; // Using currentTarget instead of target
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', backgroundChangeOnHover);
    cards[i].addEventListener('mouseleave', backgroundChangeOnLeave);
}