window.addEventListener('DOMContentLoaded', () => {

    // создаем HTML


    createClock();

    /* FUNCTION */

    function createClock() {

        let div = document.createElement('div');

        div.classList.add('clock');
        div.innerHTML = `
        <div><span class="days">10</span>дней</div>
        <div><span class="hours">10</span>часов</div>
        <div><span class="minutes">10</span>минут</div>
        <div><span class="seconds">10</span>секунд</div>
        `;
        document.body.prepend(div);

    }

    function cl(x) {
        console.log(x);
    }


    // создаем таймер

    const timeBefore = '2021-05-30';
    countTime(timeBefore);
    addClock(countTime);

    /* FUNCTION */

    function countTime (timeBefore) {
        //превращаем дату в мс и вычитаем текущую дату в мс. разницей будет оставшееся время
        const time = Date.parse(timeBefore) - Date.parse(new Date()),
        // вычислим сколько мс в дне/часе/минуте и найдем остаток
        // оставшееся время делим на сколько мс в дне. узнаем сколько дней осталось
              days = Math.floor(time / (1000 * 60 * 60 * 24)), // 1000=секунда в минуте, в часе, в дне
              hours = Math.floor( (time / (1000 * 60 * 60)) % 24),
              minutes = Math.floor( (time / (1000*60)) % 60),
              seconds = Math.floor( (time / 1000) % 60);
        // полученные данные, сколько осталось времени в днях, часах, минутах и секундах
        // записывам в обьект функции
        return {
            'time': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    // создаем функцию, в аргументах которой обьект с днями часами минутами
    //собираем все элементы в которых будем менять текст на время
    function addClock (countTime) {
        let days = document.querySelector('.days'),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            // запускаем интервал вызова функции с данными о времени
            interval = setInterval(updateClock, 1000);
            // вызываем функцию, чтобы не было скачака при загрузке страницы
            updateClock();

            // функция меняет информацию о времени в полученных переменных
        function updateClock () {
            // записываем в константу обьект возвращенный из функции
            const timeObject = countTime(timeBefore);
            // выбираем нужное свойство, с данными времени, из обьекта и записываем внутрь html
            days.innerHTML = addZero(timeObject.days);
            hours.innerHTML = addZero(timeObject.hours);
            minutes.innerHTML = addZero(timeObject.minutes);
            seconds.innerHTML = addZero(timeObject.seconds);
        }
    }
    // добавляем нолик если число меньше 10
    function addZero (number) {
        if (number < 10) {
            return `0${number}`;
        } else {
            return number;
        }
    }
})


