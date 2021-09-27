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

export default slider;
