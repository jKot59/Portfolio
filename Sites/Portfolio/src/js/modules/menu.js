function menu () {
    const burger = document.querySelector('.burger'),
          menu = document.querySelector('.menu'),
          cross = document.querySelector('.menu__close'),
          overlay = document.querySelector('.menu__overlay')


    toggleMenu(burger)
    toggleMenu(cross)
    toggleMenu(overlay)

    function toggleMenu (btn) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('menu_active')
        })
    }

}

export default menu