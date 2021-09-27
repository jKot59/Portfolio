import slider from './modules/slider';
import categories from './modules/categoties';
import '../scss/products/style1200.scss';

'use strict';

window.addEventListener('DOMContentLoaded', () => {

slider({
    mainBlockSelector: '.slideShow',
    slidersSelector: '.slide',
    frameSelector: '.slideShowFrame',
    dotsSelector: '.slideShow__dots'
});

categories();

  
})
