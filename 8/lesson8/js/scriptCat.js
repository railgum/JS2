'use strict'

let filterCategory = document.querySelector('.filter__category');
let filterTitle = document.querySelector('.filter__title');
let filterIcon = document.querySelector('.filter__icon');
let filterCatTitle = document.querySelectorAll('.filter__category-title');
let filterTrendingItem = document.querySelector('.filter__trending-item');
let filterTrendingTitle = document.querySelector('.filter__trending-title');

let filterSizeItem = document.querySelector('.filter__size-item');
let filterSizeTitle = document.querySelector('.filter__size-title');

let filterPriceItem = document.querySelector('.filter__price-item');
let filterPriceTitle = document.querySelector('.filter__price-title');

filterTitle.addEventListener('click', function() {
    filterCategory.classList.toggle('_padblock');
    filterTitle.classList.toggle('filter__title-red');
    filterIcon.classList.toggle('filter__icon-red');

    if (filterIcon.getAttribute('src') === '../img/filter.svg') {
        filterIcon.setAttribute('src', '../img/filterRed.svg')
    } else {
        filterIcon.setAttribute('src', '../img/filter.svg')
    }
});


filterCatTitle.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('_padblock');
    })
});


filterTrendingTitle.addEventListener('click', function() {
    filterTrendingItem.classList.toggle('_padblock');
});
filterSizeTitle.addEventListener('click', function() {
    filterSizeItem.classList.toggle('_padblock');
});
filterPriceTitle.addEventListener('click', function() {
    filterPriceItem.classList.toggle('_padblock');
});