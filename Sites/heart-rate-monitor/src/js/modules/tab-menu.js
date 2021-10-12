function tabMenu () {
    const tabsPages = document.querySelectorAll('.catalog__content'),
          tabsBtnParent = document.querySelector('.catalog__tabs'),
          tabsBtns = document.querySelectorAll('.catalog__tab'),
          tabInnerDiv = document.querySelectorAll('.catalog__tab div')


    tabsBtns[0].classList.add('catalog__tab_active')
    tabsPages[0].classList.add('catalog__content_active')

    tabsBtnParent.addEventListener('click', (event) => {
        if(event.target.matches('div')) {
            tabInnerDiv.forEach( (btn, i) => {
                if(event.target == btn) {
                    tabsBtns.forEach( tab => tab.classList.remove('catalog__tab_active'))
                    tabsPages.forEach( tab => tab.classList.remove('catalog__content_active'))
                    tabsPages[i].classList.add('catalog__content_active')
                    tabsBtns[i].classList.add('catalog__tab_active')
                }
            })

        }
    })

}

export default tabMenu