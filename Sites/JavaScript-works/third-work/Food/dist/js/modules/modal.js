// переменная для записи id таймера
let delay;

// открыть окно 
function callModal(window) {
    window.classList.add('show');
    document.body.style.overflow = 'hidden';
    // если окно было открыто, сбросить таймер для автоматического вызова
    if(modalWindow.matches('.show')){
        clearTimeout(delay);
    }
}
// скрываем модальное окно
function closeModal() {
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

const modalWindow = document.querySelector('.modal');

function modal () {
    // получаем кнопку и модальное окно
    const modalBtn = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelector('[data-close]');

    
    // устанавливаем события для закрытия модальных окон
    closeModalEvent();

    // на все кнопки с атрибутом назначаем кликер для вызова модального окна
    modalBtn.forEach(item => {
        item.addEventListener('click', () => {
            // при нажатии на кнопку которая в атрибуте, будет раскрывать модальное окно.
            callModal(modalWindow);
        });
    });

    // вызовем принудительно модальное окно через таймер
    delayModal(modalWindow, 50000);
    // вызываем модальное окно при прокрутке в низ
    window.addEventListener('scroll', scrollEvent);

    /* MODAL WINDOW FUNCTION */

    
    // устанавливаем события для закрытия модального окна
    function closeModalEvent() {
        // при нажатии на крестик модальное окно закрывается и возвращается прокрутка сайта
        modalWindow.addEventListener('click', event => {
            if(event.target.matches('[data-close]')) {
                closeModal();
            }
        });
        //при щелчке по серому фону модальное окно закрывается
        modalWindow.addEventListener('click', event => {
            if (event.target && event.target.matches('.modal')) {
                closeModal();
            }
        });
        // при нажатии на Esc модальное окно закрывается
        document.body.addEventListener('keydown', event => {
            if (event.keyCode === 27 && modalWindow.matches('.show')) {
                closeModal();
            }
        });
    }
    
    // открываем модальное окно через промежуток времени
    function delayModal(window, time) {
        delay = setTimeout( () => {
            callModal(window);
        }, time);
    }

    // вызываем модальное окно при скролинге в низ
    function scrollEvent () {
        if (window.pageYOffset + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
            callModal(modalWindow);
            window.removeEventListener('scroll', scrollEvent);
        }
    }
}

export default modal;
export {callModal, closeModal, modalWindow, delay};