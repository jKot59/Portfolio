'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //создаем класс для создания карточке

    class Card {
        // контруктор для задания свойств карточкам
        // url - адрес картинки
        // alt - альтернатива для картинки
        // title - заголовок карточки
        // subtitle - описание карточки
        // price - цена
        // currency - валюта
        // parent - куда вставлять
        // classes - добавляем классы карточке
        constructor (url, alt, title, subtitle, price, currency, parent, ...classes) {
            this.url = url;
            this.alt = alt;
            this.title = title;
            this.subtitle = subtitle;
            this.price = price;
            this.parent = parent;
            this.currency = currency;
            this.classes = classes;
        }
        // создаем прототип метода
        create() {
            // создаем тело карточки
            const cardBody = document.createElement('div');
            // если в аргументах не передаются классы, то исполшьзуем класс по умолчанию
            if (this.classes.length === 0) {
                // класс по умолчанию
            cardBody.classList.add('itemCard');
            } else {
                // иначе переберем массив с назначенными классами и добавим их телу
                this.classes.forEach( item => {
                    cardBody.classList.add(item);
                });
            }

            // вставляем шаблон с переменными в тело
            cardBody.innerHTML = `
            
                <img src=${this.url} alt=${this.alt}>
                <div class="title">${this.title}</div>
                <div class="subtitle">${this.subtitle}</div>
                <div class="price"><span>${this.price}</span> ${this.currency}</div>
                <button class="toCart">купить</button>
            
            `;
            // добавляем карточку в указанного родителя
            this.parent.append(cardBody);
        }

    }
     // создаем карточку по шаблону не занося ее в переменную на хранение))
    new Card(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVe0hyWInZIEcFtoVjrAvv7RQFftLve9MRA&usqp=CAU",
        "volvo XC90",
        "Volvo XC90",
        "Для XC90 в комплектации Momentum доступны два двигателя на выбор — бензиновый Т5 с 249 л.с. и дизельный D5 с 235 силами. Салон — пяти- или семиместный. Цены варьируются от 4 280 000 до 4 799 000 рублей.",
        2000000,
        "RUB",
        document.body,
        'itemCard',
        'big'


    ).create();
    
    new Card(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVe0hyWInZIEcFtoVjrAvv7RQFftLve9MRA&usqp=CAU",
        "volvo XC90",
        "Volvo XC90",
        "Для XC90 в комплектации Momentum доступны два двигателя на выбор — бензиновый Т5 с 249 л.с. и дизельный D5 с 235 силами. Салон — пяти- или семиместный. Цены варьируются от 4 280 000 до 4 799 000 рублей.",
        2000000,
        "RUB",
        document.body,
        'itemCard',
        'big'


    ).create();

});