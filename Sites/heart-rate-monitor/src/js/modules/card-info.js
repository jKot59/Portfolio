function cardInfo () {
    let linkMore = document.querySelectorAll('.catalog-item__link')
    let linkBack = document.querySelectorAll('.catalog-item__link-back')
    let content = document.querySelectorAll('.catalog-item__content')
    let list = document.querySelectorAll('.catalog-item__list')
    

    setMoreListeners(linkMore)
    setMoreListeners(linkBack)

    function setMoreListeners (button) {
        button.forEach( (item, i) => {
            item.addEventListener('click', button => toggleCard(button, i))
        })
    }

    function toggleCard (button, i) {
        button.preventDefault()
        list[i].classList.toggle('catalog-item__list_active')
        content[i].classList.toggle('catalog-item__content_active')
    }
}

export default cardInfo