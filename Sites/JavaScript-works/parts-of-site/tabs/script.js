window.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    let btns,
        getItems;

    document.body.addEventListener('click', event => {
        btns = document.querySelectorAll('.tabWindow__button');
        
        if(event.target && event.target.matches('.tabWindow__button')) {
            btns.forEach( (item, i) => {
                if (event.target == item) {
                    item.style.background = 'red';
                    hideTab();
                    showTab(i);
                    getItems[i].classList.remove('fade');
                } else {
                    getItems[i].classList.add('fade');
                    item.style.background = 'white';
                }
            });
        }
    });
    createItem();
    hideTab();
    showTab();
    changeButtonText(4, 'цветик')

                        /* FUNCTIONS */
    function createItem () {
        // let newItem = document.createElement(element);
        // document.body.prepend(newItem);
        let newItem = document.body.insertAdjacentHTML('afterbegin', `
        <div class="tabWindow">
        <div class="tabWindow__button">варя</div>
        <div class="tabWindow__button">маша</div>
        <div class="tabWindow__button">снежка</div>
        <div class="tabWindow__button">аленка</div>
        <div class="tabWindow__button">button 5</div>
        <div class="tabWindow__item"><img src="https://i.pinimg.com/originals/5b/00/14/5b00149c50fcefc5f6cc2864cdbd2ee1.png" alt="Варя"></div>
        <div class="tabWindow__item"><img src="https://i.pinimg.com/originals/a4/bf/01/a4bf01b3ed496aac77e5634efc64f127.png" alt="Маша"></div>
        <div class="tabWindow__item"><img src="https://i.pinimg.com/originals/bf/e7/87/bfe787362d1e19aed9b2e2892d6892ed.png" alt="Снежка"></div>
        <div class="tabWindow__item"><img src="https://i.pinimg.com/originals/4c/ef/e8/4cefe810e6a8b95b5dccc1806b354985.png" alt="Аленка"></div>
        <div class="tabWindow__item"><img src="http://sun9-37.userapi.com/s/v1/ig1/XETGGaAv-Qg9ufF9LW1DfgrhSXLHcsicosD6CmOebEAvUmU05VxUHx73inVWJkV7_6PgOX1d.jpg?size=200x0&quality=96&crop=477,5,1067,1067&ava=1" alt="цветок"></div>
        </div>
        `);
        

    }

    function hideTab() {
        getItems = document.querySelectorAll('.tabWindow__item')
        getItems.forEach( item => {
            item.classList.add('hide');
            item.classList.remove('show');
        })
    }

    function showTab(i = 0) {
        getItems[i].classList.add('show', 'fade');
        getItems[i].classList.remove('hide');
        let btns = document.querySelectorAll('.tabWindow__button')
    }

    function changeButtonText (number, text) {
        let btns = document.querySelectorAll('.tabWindow__button')
        btns[number].innerHTML = text;
        btns[0].style.background = 'red';

    }

    function cl(x) {
        console.log(x)
    }
})