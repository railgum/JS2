'use strict';

let brandOutside = document.querySelector('.brand__outside');
let catalog = document.querySelector('.menu__catalog');
let exit = document.querySelector('.catalog__exit');


function toggleMenu() {
    brandOutside.classList.toggle('_padblock');
}

catalog.addEventListener('click', toggleMenu);
exit.addEventListener('click', toggleMenu);