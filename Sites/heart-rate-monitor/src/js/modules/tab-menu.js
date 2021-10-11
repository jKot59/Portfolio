function tabMenu () {
    const tabs = document.querySelectorAll('.catalog__content'),
          btns = document.querySelector('.catalog__tabs'),
          btns2 = document.querySelectorAll('.catalog__tab div'),
          btns3 = document.querySelectorAll('.catalog__tab')


    btns3[0].classList.add('catalog__tab_active')
    tabs[0].classList.add('catalog__content_active')

    btns.addEventListener('click', (e) => {
        if(e.target.matches('div')) {
            console.log('here')
            btns2.forEach( (btn, i) => {
                if(e.target == btn) {
                    btns3.forEach( tab => tab.classList.remove('catalog__tab_active'))
                    tabs.forEach( tab => tab.classList.remove('catalog__content_active'))
                    tabs[i].classList.add('catalog__content_active')
                    btns3[i].classList.add('catalog__tab_active')

                }
            })

        }
    })

}

export default tabMenu