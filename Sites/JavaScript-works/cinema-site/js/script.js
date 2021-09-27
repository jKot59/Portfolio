/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoContent = document.querySelector('.promo__content'),
      adv = document.querySelectorAll('img[alt = "some picture"]'),
      genre = promoContent.querySelector('.promo__genre'),
      backgroundOfmovie = promoContent.querySelector('.promo__bg'),
      list = document.querySelectorAll('.promo__interactive-item'),
      addFilm = document.querySelector('.add'),
      getMovie = addFilm.querySelector('.adding__input'),
      submitMovie = addFilm.querySelector('button'),
      mainList = document.querySelector('.promo__interactive-list'),
      favorite = document.querySelector('input[type = "checkbox"]'),
      bin = document.querySelectorAll('.delete')
// remove advertising 
adv.forEach(item => {
    item.remove();
});
// change genre of film
genre.innerHTML = 'Драма';

// change background img
backgroundOfmovie.style.cssText = 'background: url("img/bg.jpg")';

// get copy of list of movies and sort it
const copy = [...movieDB.movies];

// Удалить старый список фильмов
list.forEach( (item, i) => {
    item.remove();
    // item.innerHTML = `${i + 1}) ${copy[i]}`
})
// Создать новый список
createNewItem(mainList, copy);

// listen to click on button
addFilm.addEventListener('submit', submitButton);




                                    /* FUNCTIONS */

function submitButton (event) {
    event.preventDefault(); // отмена стандартного поведения кнопки (не перезагружать страницу)
    let newMovie = getMovie.value.toUpperCase(); // записываем название фильма в переменную
    if (newMovie.length > 21) { // если название длиннее 21 символа, обрезаем.
        newMovie = newMovie.slice(0, 21) + "...";
    }
    // if the name of movie is not empty. Push this name to array
    if (newMovie && isNaN(newMovie)) {
        if (favorite.checked) {
            console.log('Добавляем любимый фильм')
        }     
        copy.push(newMovie);
        copy.sort();
        event.target.reset(); // очищаем поле после нажатия на кнопку
        createNewItem(mainList, copy);
    } else {
        event.target.reset(); // очищаем поле после нажатия на кнопку
    }
}
// очищает список и создает новые пункты
function createNewItem (newList, arr) {
    newList.innerHTML = "";
    copy.sort()
for (let i = 0; i < arr.length; i++){
    newList.innerHTML += 
    `<li class="promo__interactive-item">${i + 1}) ${arr[i]}
    <div class="delete"></div>
    </li>`;
}
// удаляем пункт из списка при нажатии на корзину
    document.querySelectorAll('.delete').forEach( (item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            copy.splice(i, 1); // убрать из копии массива удаляемый пункт
            createNewItem(mainList, copy)
            copy.sort(); // сортировка помогла удалять элементы в соответствии с их индексом
        })
    })
}
