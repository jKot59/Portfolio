'use strict';

const modal = document.querySelector('.modal'),
      btn = document.querySelectorAll('.openModal'),
      btnClose = document.querySelector('#closeModal')

//

btn.forEach(item => {
    item.addEventListener('click', event => {
        showModal();
    })
})

btnClose.addEventListener('click', event => {
    hideModal();
})
document.body.addEventListener('click', event => {
    if (event.target.matches('body')){
    hideModal();
    }
})

function showModal () {
    modal.classList.add('show');
}

function hideModal () {
    modal.classList.remove('show');
}