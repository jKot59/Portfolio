export default function categories () {
    const parent = document.querySelector('.categories'),
          title = document.querySelectorAll('.categories__title'),
          element = document.querySelectorAll('.categories__element');


    element.forEach( item => {
        item.classList.add('hide');
    })
    parent.addEventListener('click', e => {
        title.forEach( (item, i) => {
            if (e.target === item) {
                element[i].classList.toggle('hide');
            }

        })
    })
}