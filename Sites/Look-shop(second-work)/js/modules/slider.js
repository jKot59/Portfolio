export default function slider ({mainBlockSelector, slidersSelector, frameSelector, dotsSelector}) {
    // получаем элементы
    const slideShow = document.querySelector(mainBlockSelector),
          slide = document.querySelectorAll(slidersSelector),
          frame = document.querySelector(frameSelector),
          dots = document.querySelector(dotsSelector);
    //считаем слайды
    let countSlide = 0,
    //устанавливаем начальное положение слайдов
        offset = 0,
    // получаем ширину окна через которое будем смотреть слайды
        width = window.getComputedStyle(frame).width;
    //слушаем клики по слайдеру
    slideShow.addEventListener('click', e => {
        //когда кликнули на стрелку с лева
        if(e.target.matches('[alt="rowL"]')) {
            swypeToLeft();
        }
        // когда кликнули на стрелку с права
        if(e.target.matches('[alt="rowR"]')) {
            swypeToRight();
        }
    });

    // точки

    createDots(slide.length);
    activateDot();
    // слушаем клики по родителю точек
    dots.addEventListener('click', e => {
        //когда кликнули на точку в родителе
        if(e.target.matches('button')) {
            //перебираем массив с точками
            activateDot().forEach( (item, i) => {
                // у всех точек убираем активность
                item.classList.remove('active');
                // на кликнутую добавляем класс активности
                if(e.target == item) {
                    item.classList.add('active');
                    // записываем в номер точки в номер слайда
                    countSlide = i - 1;
                    // открываем слайд соответствующий номеру точки
                    swypeToRight ();
                }
            });
        }
    });

    /* SLIDER FUNCTIONS */

    // что делаем при нажатии на стрелку влево
    function swypeToLeft () {
        // если открыт слайд 0
        if(countSlide == 0) {
            // задаем номер последнего слайда
            countSlide = slide.length - 1;
            // устанавливаем величину смещения слайдеров
            offset = parseInt(width) * (countSlide)
            // и смещаем их
            slide.forEach( item => {
                item.style.transform = `translateX(-${offset}px)`;
            });
            //активируем ту точку, номер какого слайда открыт
            activateDot(countSlide);
        } else {
            // если слайдер не первый, то декриментируем счетчик слайдеров
            countSlide--;
            //так же устанавливаем смещение и смещаем
            offset = parseInt(width) * (countSlide)
            slide.forEach( item => {
                item.style.transform = `translateX(-${offset}px)`;
            });
            // активируем точку равную номеру открытого слайда
            activateDot(countSlide);
        }
    }
    // что делаем при нажатии на стрелку вправо
    function swypeToRight () {
        // если открыт последний слайд
        if(countSlide == slide.length - 1) {
            // задаем номер первого слайда
            countSlide = 0;
            // устанавливаем величину смещения слайдов
            offset = parseInt(width) * (countSlide);
            // и смещаем их
            slide.forEach( item => {
                item.style.transform = `translateX(-${offset}px)`;
            });
            //активируем ту точку, номер какого слайда открыт
            activateDot(countSlide);
        } else {
            countSlide++;
            offset = parseInt(width) * (countSlide)
            slide.forEach( item => {
                item.style.transform = `translateX(-${offset}px)`;
            });
            activateDot(countSlide);
        }
    }
    // создаем точки. количество равно количеству слайдов
    function createDots (quantity) {
        for (let i = 0; i < quantity; i++) {
            const newDot = document.createElement('button');
            dots.append(newDot);
        }
    }
    // активируем точку
    function activateDot(chosenDot = 0) {
        //выбрать все точки
        const allDots = document.querySelectorAll('.slideShow__dots button');
        //перебрать
        allDots.forEach( (item, i) => {
            item.classList.remove('active');
            //активировать точку равную номеру открытого слайда
            if(chosenDot === i) {
                item.classList.add('active');
            }
        });
        return allDots;
    }
}