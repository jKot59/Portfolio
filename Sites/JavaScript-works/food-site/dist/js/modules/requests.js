import {callModal, closeModal, modalWindow} from './modal';

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
       modalWindow.append(divModal);
       // вызываем модалку
       callModal(modalWindow);
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
           closeModal();
           //возвращаем главную форму обратно
           returnFormBack();
        }, 3000);

         // если текстовую модалку закроют раньше, то форма вернется раньше таймера
        modalWindow.addEventListener('click', event => {
            if (event.target && event.target.matches('.modal')) {
                closeModal();
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

export default requests;
