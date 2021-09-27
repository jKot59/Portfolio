/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/js/modules/calculator.js":
/*!***************************************!*\
  !*** ./dist/js/modules/calculator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator() {
    // получаем элементы с DOM
    const calculator = document.querySelector('.calculating__field'),
          gender = document.querySelector('#gender'),
          genderBtn = gender.querySelectorAll('.calculating__choose-item'),
          physActive = calculator.querySelector('.calculating__choose_big'),
          physActiveBtns = physActive.querySelectorAll('.calculating__choose-item'),
          heightInput = calculator.querySelector('#height'),
          weightInput = calculator.querySelector('#weight'),
          ageInput = calculator.querySelector('#age'),
          resultDiv = calculator.querySelector('.calculating__result span'),
        // массив с коэф. активности
          activityArray = [1.2, 1.375, 1.55, 1.725, 1.9];

    // переменные для значений
    let sex,
    activity, 
    height, 
    weight, 
    age, 
    result;

    // устанавливаем кнопки из локального хранилища
    buttons();
    // рассчитываем сразу значение
    refreshCalc();

    // выбираем пол делигированием
    gender.addEventListener('click', e => {
        if(e.target.matches('.calculating__choose-item')) {
            // перебираем кнопки
            genderBtn.forEach( (item, i ) => {
                // убираем класс активности
                item.classList.remove('calculating__choose-item_active');
                // добавляе класс активнсти кнопке-таргету
                if(e.target === item) {
                    item.classList.add('calculating__choose-item_active');
                    // добавляем в хранилище информацию
                    localStorage.setItem('sex', i);
                    refreshCalc();
                }
            });
        }
    });
    // выбираем физическую активность
    physActive.addEventListener('click', e => {
        // когда кликнули на кнопку
        if (e.target.matches('.calculating__choose-item')) {
            // переберем все кнопки
            physActiveBtns.forEach( (item, i) => {
                // удалим у всех класс активности
                item.classList.remove('calculating__choose-item_active');
                // если кликнутая кнопка есть в массиве
                if(e.target === item) {
                    // добавим ей класс активности
                    item.classList.add('calculating__choose-item_active');
                    // а в переменную для рассчетов занесем данные из массива
                    activity = activityArray[i];
                    // сохраним в хранилище
                    localStorage.setItem('activity', i);
                    // обновим калькулятор
                    refreshCalc();
                }
            });
        }
    });
    // получаем рост, забираем только цифры и выводим результат
    heightInput.addEventListener('input', () => {
        // убирает возможность пользователя вводить буквы
        height = +heightInput.value.match(/\d/g).join('');
        localStorage.setItem('height', height);
        refreshCalc();
    });
    // получаем вес, забираем только цифры и выводим результат
    weightInput.addEventListener('input', () => {
        // убирает возможность пользователя вводить буквы
        weight = +weightInput.value.match(/\d/g).join('');
        localStorage.setItem('weight', weight);
        refreshCalc();
    });
    // получаем возраст, забираем только цифры и выводим результат
    ageInput.addEventListener('input', () => {
        // убирает возможность пользователя вводить буквы
        age = +ageInput.value.match(/\d/g).join('');
        localStorage.setItem('age', age);
        refreshCalc();
    });

    /* CALCULATOR FUNCTIONS */

    // рассчитываем нужно количество ккалорий и записываем в DOM
    function refreshCalc () {
        // записываем значения полей из локал сторэдж
        weightInput.value = localStorage.getItem('weight');
        heightInput.value = localStorage.getItem('height');
        ageInput.value = localStorage.getItem('age');
        height = heightInput.value;
        weight = weightInput.value;
        age = ageInput.value;
        // если кнопка активности есть в локальном хранилище то используем ее для калькулятора
        if (localStorage.getItem('activity')){
            activity = activityArray[localStorage.getItem('activity')]
            // если нету, то подставляем дефолт
        } else {
            activity = activityArray[1];
        }
        // если пол есть в локальном хранилище, то подставляем его
        if (localStorage.getItem('sex')){
            sex = localStorage.getItem('sex')
            // если нету, то подставляем дефолт
        } else {
            sex = 0;
        }
        // выбираем фформулу если 0 то для Женщин, иначе для муЖчин
        if(sex == 0) {
            result = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity);
        } else {
            result = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity);
        }
        if (height && weight && age) {
        resultDiv.innerHTML = `${result}`;
        } else {
        resultDiv.innerHTML = `0`;
        }
    }
    function buttons () {
    sex = localStorage.getItem('sex');
        if(sex == 1) {
            genderBtn[1].classList.add('calculating__choose-item_active');
            genderBtn[0].classList.remove('calculating__choose-item_active');
        }

        if(localStorage.getItem('activity')) {
            activity = localStorage.getItem('activity');
            physActiveBtns.forEach( (item, i) => {
                item.classList.remove('calculating__choose-item_active');
                if (i == localStorage.getItem('activity')) {
                    item.classList.add('calculating__choose-item_active');
                }
            });
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);


/***/ }),

/***/ "./dist/js/modules/cards.js":
/*!**********************************!*\
  !*** ./dist/js/modules/cards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards () {
        // создаем конструктор карточек
        class Card {
            // добавляем все свойства для HTML
            constructor(url, altimg, subtitle, description, price, parent, ...classes) {
                this.url = url;
                this.altimg = altimg;
                this.subtitle = subtitle;
                this.description = description;
                this.price = price;
                this.parent = parent;
                this.classes = classes;
                this.currencyRate = 80;
                this.translateCurrency();
            }
            // конвертируем валюту
            translateCurrency() {
                this.price = this.price * this.currencyRate;
            }
            // создаем HTML структуру
            create() {
                // получаем место, куда будет добавлена карточка
                const place = document.querySelector(this.parent),
                // создаем обертку карточки
                      card = document.createElement('div');
                      // применяем значение по умолчанию
                      // если rest массив пустой. длина 0
                if (this.classes.length === 0) {
                    // создаем свойство и добавляем в него класс
                    this.element = 'menu__item';
                    // присваиваем новый класс элементу
                    card.classList.add(this.element);
                } else {
                    // иначе перебираем рест массив и каждый класс добавляем к элементу
                this.classes.forEach(item => card.classList.add(item));
                }
                // добавляем карточку в конец родителя
                place.append(card);
                // сама структура со свойствами
                card.innerHTML = `
                    <img src=${this.url} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>
                `;
            }
        }
        // получаем данные карточек с сервера
        const getResource = async (url) => {
            const res = await fetch (url);
            if (!res.ok) {
                throw new Error (`Ошибка отправки на сервер ${url} код ошибки ${res.status}`);
            }
            return await res.json();

        };

        // создаем карточку из полученных данных

        // getResource('http://localhost:3000/menu')
        // .then( item => {
        //     item.forEach(({img, altimg, title, descr, price}) => {
        //         new Card(img, altimg, title, descr, price, '.menu .container').create();
        //     });
        // });
        axios.get('http://localhost:3000/menu')
        .then(item => {
            // item это переменная-аргумент где лежат данные с сервера, а  data там лежат обьекты карточек
            item.data.forEach(({img, altimg, title, descr, price}) => {
                        new Card(img, altimg, title, descr, price, '.menu .container').create();
                    });
            
        });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./dist/js/modules/modal.js":
/*!**********************************!*\
  !*** ./dist/js/modules/modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "callModal": () => (/* binding */ callModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "modalWindow": () => (/* binding */ modalWindow),
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./dist/js/modules/requests.js":
/*!*************************************!*\
  !*** ./dist/js/modules/requests.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./dist/js/modules/modal.js");


function requests (sendTo) {
    //получаем все формы для отправки данных
    const form = document.querySelectorAll('form')
    // на каждую форму вешаем слушатель отправки
    form.forEach( item => {
        item.addEventListener('submit', e => {
            // убираем стандартное поведение submit (перезагрузку после отправки)
            e.preventDefault();
            // как только произошла отправка формы на сервер запускаем функцию
            bindPostData(item);
            // сбрасываем поля формы
            item.reset();
        });
    });

    const postData = async(url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    /* REQUEST FUNCTIONS */

    // создаем обьект запроса. в аргумент помещаем форму
    function bindPostData (form) {
        // преобразуем данные из формы в формат форм дата
        const formData = new FormData(form);
        // преобразуем форм дату в json
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        // отправляем POST запрос на сервер
        postData(sendTo, json)
        // создаем функцию, которая преобразует аргумент на входе в текст и если успешно, то выполняем следующий then куда в аргументы вносим уже успешно измененнуый аргумент
        .then( resolve => {
            console.log(resolve)
            createThanksModal('Thanks')
        })
        .catch( () => {
            createThanksModal('Error');
        })
    }

    function createThanksModal (text) {
       // получаем поле, которое скроем для добавления текста
       const modalDialog = document.querySelector('.modal__dialog');
       // скрываем его добавлением класса
       modalDialog.classList.add('hide');
       // создаем новый див-обертку для текста
       const divModal = document.createElement('div');
       // назначаем класс такой же как у скрытого 
       divModal.classList.add('modal__dialog');
       // добавляем контент
       divModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <h2>${text}</h2>
            </div>
        `;
       // вставляем в DOM
       _modal__WEBPACK_IMPORTED_MODULE_0__.modalWindow.append(divModal);
       // вызываем модалку
       (0,_modal__WEBPACK_IMPORTED_MODULE_0__.callModal)(_modal__WEBPACK_IMPORTED_MODULE_0__.modalWindow);
       earlyCloseModal(divModal);
    }
    // при закрытии текстового окна вернуть обратно форму
    function returnFormBack () {
       const modalDialog = document.querySelector('.modal__dialog');
       // скрываем текстовое модальное окно
       modalDialog.classList.remove('hide');
    }
    // если текстовую модалку закроют раньше или через 3 сек сама исчезнет
    function earlyCloseModal (divModal) {

        // модалка с ответом удаляется через 3 сек.
        const timerId = setTimeout(() => {
           divModal.remove();
           (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
           //возвращаем главную форму обратно
           returnFormBack();
        }, 3000);

         // если текстовую модалку закроют раньше, то форма вернется раньше таймера
        _modal__WEBPACK_IMPORTED_MODULE_0__.modalWindow.addEventListener('click', event => {
            if (event.target && event.target.matches('.modal')) {
                (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
                divModal.remove();
                returnFormBack();
                clearTimeout(timerId)
            }
        });
    }

//    fetch('http://localhost:3000/menu')
//    .then(data => data.json())
//    .then(res => console.log(res))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requests);


/***/ }),

/***/ "./dist/js/modules/slider.js":
/*!***********************************!*\
  !*** ./dist/js/modules/slider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider ({frame, itself, prev, next, current, field, totalNumber}) {
// выбираем элементы со страницы
    const slideFrame = document.querySelector(frame),
          slideItself = document.querySelectorAll(itself),
          slidePrev = document.querySelector(prev),
          slideNext = document.querySelector(next),
          slideCurrent = document.querySelector(current),
          slidesField = document.querySelector(field),
          total = document.querySelector(totalNumber),
          width = +window.getComputedStyle(slideFrame).width.replace(/\D/g, '');

    let countSlide = 0;
    let offset = 0;
    // общее количество слайдов равное длине массива со слайдами
    total.innerHTML = addZero(slideItself.length);
    // обновляем номер текущего слайда
    slideNumber();

    //устанавливаем блоку ширину равную ширине всех слайдов в %
    slidesField.style.width = 100 * slideItself.length + '%';
    slidesField.style.display ='flex';
    slidesField.style.transition = '0.5s all';
    slideFrame.style.overflow = 'hidden';
    // устанавливаем каждому слайду ширину как у блока-окошка
    slideItself.forEach( item => {
        item.style.width = width;
    });
    // переключаем слайды по стрелке вправо
    slideNext.addEventListener('click', () => {
    // если положение равно ширине блока-окошка умноженное на всю длину слайдов - 1
    if(offset === width * (slideItself.length - 1)) {
        // установим слайдер в исходное положение
        offset = 0;
        // сбросим счетчик в исходное
        countSlide = 0;
        // закрашиваем точку открытого слайдера
        markDot();
    } else {
        // иначе пролистаем на новый слайд задав транслэйт больше на ширину одногой слайда
        offset += width;
        // увеличим счетчик
        countSlide++;
        // закрашиваем точку открытого слайдера
        markDot();
    }
    // смещаем слайдер
    slidesField.style.transform = `translateX(-${offset}px)`;
    // обновим значение текущего слайда
    slideNumber();
    });

    // то же самое только со стрелокой в лево
    slidePrev.addEventListener('click', () => {
        if(offset == 0) {
            offset = width * (slideItself.length - 1);
            countSlide = slideItself.length - 1;
            markDot();
        } else {
            offset -= width;
            countSlide--;
            markDot();
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        slideNumber();
    });

    /* NEW SLIDER FUNCTIONS */

    // обновляем номер текущего слайда
    function slideNumber () {
        slideCurrent.innerHTML = addZero(countSlide + 1);
    }

    // меняем цвет у точки с открытым слайдом
    function markDot () {
        // всем точкам убрать подсветку
        getDots().forEach( item => {
            item.style.backgroundColor = '';
        });
        // у точки открытого слайда добавить подсветку
        getDots()[countSlide].style.backgroundColor = 'red';
    }

    /* SLIDER NAVIGATION */

    // получаем необходимые элементы
    const mainSlider = document.querySelector('.offer__slider');
    // добавляем инлайн стиль для абсолютного позиционирования точек
    mainSlider.style.position = 'relative';
    // слушаем клики по родителю слайдера
    mainSlider.addEventListener('click', e => {
    // если кликнули по точке
        if(e.target.matches('.dot')) {
            // перебираем все точки
            getDots().forEach( (item, i) => {
                // удаляем подсветку у всех точек
                item.style.backgroundColor = '';
                // когда нашли в массиве ту точку на которую кликнули
                if (item === e.target) {
                    // добавляем подсветку на кликнутой точке
                    item.style.backgroundColor = 'red';
                    // берем ее индекс и выводим слайд под этим индексом
                    countSlide = i;
                    // сдвигаем слады до нужного
                    offset = i * width;
                    slidesField.style.transform = `translateX(-${offset}px)`;
                    //обновляем текущий номер слайда
                    slideNumber();
                }
            });
        }
    });

    // создаем точки исходя из количества слайдов
    const dots = document.createElement('div');

    dots.classList.add('carousel-indicators');

    for (let i = 0; i < slideItself.length; i++) {
    dots.innerHTML += `<div class="dot"></div>`;
    mainSlider.append(dots);
    }
    // подсвечиваем точку
    getDots()[0].style.backgroundColor = 'red';

    /* SLIDER NAVIGATION FUNCTIONS */

    function getDots () {
    return document.querySelectorAll('.dot');
    }
    function addZero(incoming) {
        if (incoming < 10) {
            return `0${incoming}`;
        } else {
            return incoming;
        }
     }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./dist/js/modules/tabs.js":
/*!*********************************!*\
  !*** ./dist/js/modules/tabs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs (tabsParent, tabsBtns, tabsWindows) {

    const tabs = document.querySelector(tabsParent),  // родитель кнопок
          tabsItems = tabs.querySelectorAll(tabsBtns), // все кнопки
          tabContent = document.querySelectorAll(tabsWindows); // картинки

    hideTab(); // скрываем перовначально все табы
    showTab(); // открываем по умолчанию нулевой таб

    //вешаем обработчик кликов на родителя
    tabs.addEventListener('click', event => {

    // если кликнули по родителю и в ивэент таргете будет класс tabheader__item
    if (event.target && event.target.classList.contains(tabsBtns.slice(1))) {
            // переберем весь список кнопок
            tabsItems.forEach((item, i) => {
                // удалим у всех табов жирненький шрифт
                item.classList.remove('tabheader__item_active');
                // найдем нужную кнопку из таргета и из перебора
                if (event.target == item) {
                    // установим только для кликнутого таба жирненький шрифт
                    item.classList.add('tabheader__item_active');
                    hideTab();  // скроем все картинки
                    showTab(i); // откроем то на котором в цикле будет i
                }
            });
        }
    });

    /* TABS FUNCTIONS */

    // фунция скрывающая все табы кроме того, на который кликнули
    function hideTab() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }
    // показываем таб
    function showTab(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "./dist/js/modules/timer.js":
/*!**********************************!*\
  !*** ./dist/js/modules/timer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer (date, timerParent) {
    // устанавливаем дату до которой будем отсчитвать
    const deadLine = date;
    // первый аргумент - родитель с таймером, второй - дата до которой считаем
    setClock(timerParent, deadLine);

    /* FUNCTIONS */

    // находим разницу между текущей датой и до которой будем считать в мс. Преобразуем мс в дни, часы, минуты
    function getDate(deadLine) {
        const time = Date.parse(deadLine) - Date.parse(new Date()),
              days = Math.floor(time / (1000 * 60 * 60 * 24)),
              hours = Math.floor((time / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((time / (1000 * 60)) % 60),
              seconds = Math.floor((time / 1000) % 60);
            // возвращаем обьект с готовыми данными для вставки в DOM
        return {
            'time': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    // получаем из DOM элементы, куда будем вставлять значения вемени
    function setClock(selector, deadLine) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
            // обновляем счетчик каждую секунду
              timeInterval = setInterval(updateClock, 1000);
            // запускаем фунцию сразу, чтобы не было скачка после перезагрузки страницы
        updateClock();
        // записываем в DOM значения времени
        function updateClock() {
            const t = getDate(deadLine);

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);
            seconds.innerHTML = addZero(t.seconds);
            // останавливаем таймер если время вышло
            if (getDate.time <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    // добавляем 0, если значение меньше 10
    function addZero(incoming) {
       if (incoming < 10) {
           return `0${incoming}`;
       } else {
           return incoming;
       }
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/scrip1.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_js_modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/js/modules/tabs */ "./dist/js/modules/tabs.js");
/* harmony import */ var _dist_js_modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/js/modules/timer */ "./dist/js/modules/timer.js");
/* harmony import */ var _dist_js_modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/js/modules/slider */ "./dist/js/modules/slider.js");
/* harmony import */ var _dist_js_modules_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/js/modules/requests */ "./dist/js/modules/requests.js");
/* harmony import */ var _dist_js_modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/js/modules/modal */ "./dist/js/modules/modal.js");
/* harmony import */ var _dist_js_modules_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dist/js/modules/cards */ "./dist/js/modules/cards.js");
/* harmony import */ var _dist_js_modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dist/js/modules/calculator */ "./dist/js/modules/calculator.js");








// ждем построения DOM
window.addEventListener('DOMContentLoaded', () => {
    
    (0,_dist_js_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__items', '.tabheader__item', '.tabcontent');
    (0,_dist_js_modules_timer__WEBPACK_IMPORTED_MODULE_1__.default)('2021-12-31', '.timer');
    (0,_dist_js_modules_requests__WEBPACK_IMPORTED_MODULE_3__.default)('http://localhost:3000/requests');
    (0,_dist_js_modules_modal__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_dist_js_modules_cards__WEBPACK_IMPORTED_MODULE_5__.default)();
    (0,_dist_js_modules_calculator__WEBPACK_IMPORTED_MODULE_6__.default)();
    (0,_dist_js_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default)({
        frame: '.offer__slider-wrapper',
        itself: '.offer__slide',
        next: '.offer__slider-next',
        prev: '.offer__slider-prev',
        current: '#current',
        field: '.offer__slider-inner',
        totalNumber: '#total'
    });

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map