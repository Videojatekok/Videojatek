let page1 = document.getElementsByClassName('backgroundChange');

function backgroundChangeOnHover1(event) {
    event.currentTarget.style.border = '2px groove white'; 
    event.currentTarget.style.backgroundColor = 'rgb(70, 70, 130)';
    event.currentTarget.style.borderRadius = '12px';
}

function backgroundChangeOnLeave1(event) {
    event.currentTarget.style.border = ''; 
    event.currentTarget.style.backgroundColor = 'rgb(32, 32, 104)';
}

for (let i = 0; i < page1.length; i++) {
    page1[i].addEventListener('mouseover', backgroundChangeOnHover1);
    page1[i].addEventListener('mouseleave', backgroundChangeOnLeave1);
}

/* -------------------------------------- */

let page2 = document.getElementsByClassName('card_second_page');

function backgroundChangeOnHover2(event) {
    event.currentTarget.style.border = '2px groove white'; 
    event.currentTarget.style.backgroundColor = '#CC0055';
    event.currentTarget.style.borderRadius = '12px';
}

function backgroundChangeOnLeave2(event) {
    event.currentTarget.style.border = ''; 
    event.currentTarget.style.backgroundColor = '#CC0000';
}

for (let i = 0; i < page2.length; i++) {
    page2[i].addEventListener('mouseover', backgroundChangeOnHover2);
    page2[i].addEventListener('mouseleave', backgroundChangeOnLeave2);
}

/* -------------------------------------- */

let page3 = document.getElementsByClassName('card_fourth_page');

function backgroundChangeOnHover3(event) {
    event.currentTarget.style.border = '2px groove white'; 
    event.currentTarget.style.backgroundColor = '#29ADC5';
    event.currentTarget.style.borderRadius = '12px';
}

function backgroundChangeOnLeave3(event) {
    event.currentTarget.style.border = ''; 
    event.currentTarget.style.backgroundColor = '#29ADB2';
}

for (let i = 0; i < page3.length; i++) {
    page3[i].addEventListener('mouseover', backgroundChangeOnHover3);
    page3[i].addEventListener('mouseleave', backgroundChangeOnLeave3);
}

/* -------------------------------------- */

let page4 = document.getElementsByClassName('card_third_page');

function backgroundChangeOnHover4(event) {
    event.currentTarget.style.border = '2px groove white'; 
    event.currentTarget.style.backgroundColor = 'rgb(130, 126, 150)';
    event.currentTarget.style.borderRadius = '12px';
}

function backgroundChangeOnLeave4(event) {
    event.currentTarget.style.border = ''; 
    event.currentTarget.style.backgroundColor = 'rgb(130, 126, 126)';
}

for (let i = 0; i < page4.length; i++) {
    page4[i].addEventListener('mouseover', backgroundChangeOnHover4);
    page4[i].addEventListener('mouseleave', backgroundChangeOnLeave4);
}

/* -------------------------------------- */

let page5 = document.getElementsByClassName('card_fifth_page');

function backgroundChangeOnHover5(event) {
    event.currentTarget.style.border = '2px groove white'; 
    event.currentTarget.style.backgroundColor = 'rgb(40, 190, 30)';
    event.currentTarget.style.borderRadius = '12px';
}

function backgroundChangeOnLeave5(event) {
    event.currentTarget.style.border = ''; 
    event.currentTarget.style.backgroundColor = 'rgb(10, 151, 10)';
}

for (let i = 0; i < page5.length; i++) {
    page5[i].addEventListener('mouseover', backgroundChangeOnHover5);
    page5[i].addEventListener('mouseleave', backgroundChangeOnLeave5);
}