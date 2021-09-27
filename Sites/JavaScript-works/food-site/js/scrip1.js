import tabs from '../dist/js/modules/tabs';
import timer from '../dist/js/modules/timer';
import slider from '../dist/js/modules/slider';
import requests from '../dist/js/modules/requests';
import modal from '../dist/js/modules/modal';
import cards from '../dist/js/modules/cards';
import calculator from '../dist/js/modules/calculator';

// ждем построения DOM
window.addEventListener('DOMContentLoaded', () => {
    
    tabs('.tabheader__items', '.tabheader__item', '.tabcontent');
    timer('2021-12-31', '.timer');
    requests('http://localhost:3000/requests');
    modal();
    cards();
    calculator();
    slider({
        frame: '.offer__slider-wrapper',
        itself: '.offer__slide',
        next: '.offer__slider-next',
        prev: '.offer__slider-prev',
        current: '#current',
        field: '.offer__slider-inner',
        totalNumber: '#total'
    });

});