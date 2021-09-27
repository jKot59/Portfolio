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

export default cards;
