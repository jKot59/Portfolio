import moveSlider from './modules/slider.js';
import cardInfo from './modules/card-info';
import tabMenu from './modules/tab-menu';
import modals from './modules/modals';
import validate from './modules/validate';
import mailer from './modules/mailer';
import pageUp from './modules/page-up';

moveSlider()
cardInfo()
tabMenu()
modals()
validate()
mailer()
pageUp()
new WOW().init();

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.footer__map').style.display = "block"
})