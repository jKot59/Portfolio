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

export default timer;
