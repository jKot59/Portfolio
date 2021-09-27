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

export default calculator;
