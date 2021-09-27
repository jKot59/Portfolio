'use strict';

// получаем элементы со страницы
const list = document.querySelector('.list'),
      form = document.querySelector('#getItem'),
      input = document.querySelector('#typeItem'),
      btn = document.querySelector('#buttonItem');

// массив элементов списка
let arrItem = [];

addItems(form, arrItem, input, list)
removeItems(list, 'div', arrItem)

/* FUNCTIONS */

// получаем элемент для списка, заносим его в массив и выводим на страницу
function addItems (form, array, input, list) {

form.addEventListener('submit', event => {

    // отменяем стандартное поведение формы
    event.preventDefault();

    // отправляем полученное значение в массив
    array.push(input.value);

    // сбрасываем форму
    form.reset();

    // удаляем старый список DOM
    list.innerHTML = '';

    // создаем новый список DOM
    array.forEach( item => {
        list.innerHTML += `
            <div>${item}</div>
        `
    })
})
}

// удаляем элементы списка при нажатии на них
function removeItems (list, wrapper, array) {
// слушаем клики по списку
list.addEventListener('click', event => {
    // если кликнули по элементу
    if (event.target.matches(wrapper)) {
        // перебираем все элементы и удаляем тот, на который кликнули
        list.querySelectorAll(wrapper).forEach( (item, i) => {
            if(event.target == item) {
                list.innerHTML = '';
                array.splice(i, 1);
                array.forEach( item => {
                    list.innerHTML += `
                        <div>${item}</div>
                    `
                })
            }
        })
    }
})
}